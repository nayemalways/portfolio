import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';

import Layout from '../../Layout/Layout';
import { ApiRequest } from '../../ApiRequest/Api';
import BootstrapLoader from '../../Components/Main/BootstrapLoader';



const BlogDetails = () => {

    // Manage State
    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(true);
     
    // Call API
    useEffect(() => {
        (async () => {
            const result = await ApiRequest('GET', `/blog-details/${blogId}`);
            setBlog(result.data);
            setLoading(false);
        })()
    }, [])


   // Assign blog as data
    const data = blog ;

    // MongoDB time formatting
    useEffect(() => {
        if (data?.createdAt) {
            const readableTime = format(new Date(data.createdAt), "PPpp", {locale: bn});
            setDate(readableTime.slice(0, 22));
        }
    }, [data]);  // Add data as a dependency
    



    return (
        <Layout>
            <section>
                <div className="container-fluid py-5 bg-secondary">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 d-flex justify-content-center  ">

                            {
                                loading ? ( <BootstrapLoader /> ) : (

                                    <div  className='blog-card d-flex flex-column w-75 p-3 rounded rounded-4 bg-light'>
                                        <img className='w-75 m-auto rounded rounded-4' src={data?.image} alt="" />
                                        <div className="blog-body text-start pt-4 ">
                                            <h1 className='blog_title text-black'> { data?.title } </h1>
                                            <span className='shadow shadow-4 bg-dark text-white d-inline-block py-2 px-3 my-3 rounded rounded-4 shadow shadow-lg'> Published:- {date} </span>

                                            { data?.description && (
                                                <div  className=' text-start text-black line-spacing' dangerouslySetInnerHTML={{ __html: data.description }}></div>
                                            )}

                                        </div>
                                    </div>

                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogDetails;
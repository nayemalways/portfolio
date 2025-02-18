import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { bn } from 'date-fns/locale';

import Layout from '../../Layout/Layout';
import { ApiRequest } from '../../ApiRequest/Api';



const BlogDetails = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    const [date, setDate] = useState('');
     
    useEffect(() => {
        (async () => {
            const result = await ApiRequest('GET', `/blog-details/${blogId}`);
            setBlog(result.data);
        })()
    }, [])


   // Check if data is available
    const data = blog[0];

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
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 d-flex justify-content-center">
                            <div  className='blog-card w-75 bg-dark p-3 rounded rounded-4'>
                                <img className='img-fluid rounded rounded-4' src={data?.image} alt="" />
                                <div className="blog-body text-start pt-4">
                                    <h1 className='blog_title text-white'> { data?.title } </h1>
                                    <span className='shadow shadow-4 bg-dark text-white d-inline-block py-2 px-3 my-3 rounded rounded-4 shadow shadow-lg'> Published:- {date} </span>

                                    { data?.description && (
                                        <div  className=' text-start inside-image line-spacing' dangerouslySetInnerHTML={{ __html: data.description }}></div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogDetails;
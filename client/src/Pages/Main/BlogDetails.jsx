import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';

import { useParams } from 'react-router-dom';
import { ApiRequest } from '../../ApiRequest/Api';



const BlogDetails = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
     
    useEffect(() => {
        (async () => {
            const result = await ApiRequest('GET', `/blog-details/${blogId}`);
            setBlog(result.data);
        })()
    }, [])


    const data = blog[0];


    console.log( data?.title);

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
                                    <span className='shadow shadow-4 bg-secondary text-warning d-inline-block py-1 px-2 my-3 rounded rounded-4 '>10-02-2025</span>

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
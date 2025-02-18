import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import { ApiRequest } from '../../ApiRequest/Api';



const BlogSection = ({title, subtitle, display_none}) => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ApiRequest('GET', '/read-blog');
            setBlog(result.data);
        })()
    }, [])

 

     

    return (
        <>
           <section className='blog-section py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
                            <div>
                                <h2 className='h1_color fw-bold'>{title}</h2>
                                <p className='text-secondary h5'>{subtitle}</p>
                            </div>
                        </div>
                        <div className="col-md-12 pt-5 d-flex justify-content-center align-items-center gap-4 flex-wrap">
                            
                        {
                            blog.slice(0, 6).map((item, index) =>{
                                return <Card key={index}  data={item}/>
                            })
                        }
                             
                        </div>
                        <div className={`col-md- rounded rounded-312 text-center pt-4  d-${display_none}`} >
                            <Link className='h5' to='/blog'>View all...</Link>
                        </div>
                    </div>
                </div>
           </section> 
        </>
    );
};

export default BlogSection;
import React from 'react';


import { Link } from 'react-router-dom';
import Card from './Card';



const BlogSection = () => {
    return (
        <>
           <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
                            <div>
                                <h2 className='h1_color fw-bold'>Latest blog</h2>
                                <p className='text-secondary h5'>Be updated with latest technology in the world.</p>
                            </div>
                        </div>
                        <div className="col-md-12 pt-5 d-flex justify-content-center align-items-center gap-4 flex-wrap">
                            
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                             
                        </div>
                        <div className="col-md- rounded rounded-312 text-center pt-4">
                            <Link className='h5' to='/blog'>View all...</Link>
                        </div>
                    </div>
                </div>
           </section> 
        </>
    );
};

export default BlogSection;
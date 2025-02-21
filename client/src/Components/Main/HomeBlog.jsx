import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const HomeBlog = ({data}) => {
    return (
        < >
             <section className='blog-section py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
                            <div className='overflow-x-hidden'>
                                <h2 data-aos="fade-left" className='h1_color fw-bold '>Latest blog</h2>
                                <p data-aos="fade-right" className='text-secondary h5'>Be updated with latest technology in the world.</p>
                            </div>
                        </div>
                        <div className="col-md-12 pt-5 d-flex justify-content-center align-items-center gap-4 flex-wrap">
                            
                        {
                            data.slice(0, 6).map((item, index) =>{
                                return <Card key={index}  data={item}/>
                            })
                        }
                             
                        </div>
                        <div className={`col-md- rounded rounded-312 text-center pt-4`} >
                            <Link className='h5' to='/blog'>View all...</Link>
                        </div>
                    </div>
                </div>
           </section>
        </>
    );
};

export default HomeBlog;
import React  from 'react';
import Card from './Card';

const BlogSection = ({data}) => {
     return (
        <>
           <section className='blog-section py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center text-center">
                            <div>
                                <h2 data-aos="fade-right" className='h1_color fw-bold'>Read Our Blogs</h2>
                                <p className='text-secondary h5'> Expolore our industry updated tech blogs </p>
                            </div>
                        </div>
                        <div className="col-md-12 pt-5 d-flex justify-content-center align-items-center gap-4 flex-wrap">
                            
                        {
                            data.map((item, index) => <Card key={index}  data={item}/> )
                        }
                             
                        </div>
                    </div>
                </div>
           </section> 
        </>
    );
};

export default BlogSection;
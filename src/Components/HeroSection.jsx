import React from 'react';
import { Link } from 'react-router-dom';

import image from '../assets/image/nayem.png'



const HeroSection = () => {
    return (
        <>
            <section>
                <div style={{height: "100vh"}} className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-6 col-lg-6 col-12 py-5">
                            <div>
                                <h3 className='text-secondary'>Hi, I'm</h3>
                                <h1 className='h1_color fw-bold display-3 '>  Nayem Ahmed</h1>
                                <p className='py-4 h5 text-secondary'>
                                    I’m a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                                </p>
                                <Link to='/contact' className='btn btn-primary'>Contact Me</Link>
                            </div>
                        </div>
                        <div className="pt-sm-5 col-md-6 col-lg-6 col-12 ">
                            <div className='w-100 h-100 d-block d-flex justify-content-center align-items-center'>
                                <img className='img-fluid w-250px w-md-70 rounded rounded-circle' src={image} alt="Photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
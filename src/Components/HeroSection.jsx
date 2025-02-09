import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

import image from '../assets/image/nayem_.png'



const HeroSection = () => {
    return (
        <>
            <section id='Hero__section'>
                <div style={{height: "100vh"}} className="container">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-6 col-lg-6 col-12 py-5">
                            <div>
                                <h4 className='text-secondary'>Hi, I'm</h4>
                                <h1 className='h1_color fw-bold '>
                                   
                                   {/* Added text animation  */}
                                <TypeAnimation
                                         sequence={[
                                             'Nayem Ahmed', // Types 'One'
                                             2000, // Waits 1s
                                             'A Full Stack Javascript Developer', // Deletes 'One' and types 'Two'
                                             2000, // Waits 2s
                                            ]}
                                            speed={40}
                                            wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        style={{ fontSize: '1.2em', display: 'inline-block' }}
                                        />
                                    
                                    </h1>
                                <p className='py-3 text-secondary'>
                                    I’m a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                                </p>
                                <Link to='/contact' className='btn btn-primary'>Contact Me</Link>
                            </div>
                        </div>
                        <div className="pt-sm-5 col-md-6 col-lg-6 col-12 ">
                            <div className='w-100 h-100 d-block d-flex justify-content-center align-items-center'>
                                <img className='_shadow img-fluid w-250px w-md-70 rounded rounded-circle bg-dark' src={image} alt="Photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
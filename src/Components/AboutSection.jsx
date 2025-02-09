import React from 'react';
import image from '../assets/image/me.png'

const AboutSection = () => {
    return (
        <>
          <section>
            <div style={{height: "90vh"}} className="container  ">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-md-12">
                        <h1 className='h1_color text-center mb-0'>About Me</h1>
                    </div>
                    <div  className="col-sm-6 col-md-6  ">
                        <p className='text-secondary  lh-lg mb-0'>
                                Hello! I'm Nayem, a passionate Junior Full-Stack MERN Developer.
                                I specialize in building dynamic and responsive web applications using <span className='fw-bold text-info h6'>MongoDB, Express.jsReact, and Node.js.</span> With a strong foundation in JavaScript and experience in development, I enjoy crafting seamless and efficient web experiences.
                                I'm always eager to learn new technologies and improve my skills. My goal is to scalable and user-friendly applications that solve real-world problems.
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-6 text-center  ">
                        <img  className='img-fluid rounded rounded-sm shadow shadow-3 glow max-width' src={image} alt="Photo" />
                    </div>
                </div>
            </div>
          </section> 
        </>
    );
};

export default AboutSection;


/*
  <section>
            <div style={{height: "90vh"}} className="container  ">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-md-12">
                        <h1 className='h1_color text-center'>About Me</h1>
                    </div>
                    <div className="col-md-12">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <p>
                                Hello! I'm Nayem, a passionate Junior Full-Stack MERN Developer.
                                I specialize in building dynamic and responsive web applications using MongoDB, Express.jsReact, and Node.js. With a strong foundation in JavaScript and experience in development, I enjoy crafting seamless and efficient web experiences.

                                I'm always eager to learn new technologies and improve my skills. My goal is to scalable and user-friendly applications that solve real-world problems.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-6 text-center">
                                <img style={{maxWidth: "200px"}} className='img-fluid ' src={image} alt="Photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section> 
*/
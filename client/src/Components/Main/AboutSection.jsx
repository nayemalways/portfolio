import React from 'react';
import image from '../../assets/image/nayem_.png'


const AboutSection = () => {
    return (
        <>
          <section className='about-section py-5'>
            <div style={{height: "90vh"}} className="container ">
                <div className="row h-100 d-flex justify-content-center align-items-center">               
                    <div  className="col-sm-12 col-md-6 overflow-x-hidden">
                        <h1 data-aos="fade-right" className='h1_color fw-bold text-center '>About Me</h1>
                        <p data-aos="fade-right" className='text-secondary text-line-height mb-0'>
                                Hello! I'm Nayem, a passionate Junior Full-Stack MERN Developer.
                                I specialize in building dynamic and responsive web applications using  <span className='fw-bold  text-info h6'>MongoDB, Express.jsReact, and Node.js.</span> With a strong foundation in JavaScript and experience in development, I enjoy crafting seamless and efficient web experiences.
                                I'm always eager to learn new technologies and improve my skills. My goal is to scalable and user-friendly applications that solve real-world problems.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 text-center overflow-x-hidden ">
                        <img data-aos="fade-left" style={{maxWidth: '230px'}}  className='bg-dark img-fluid rounded rounded-sm shadow shadow-3 max-width' src={image} alt="Photo" />
                    </div>
                </div>
            </div>
          </section> 
        </>
    );
};

export default AboutSection;
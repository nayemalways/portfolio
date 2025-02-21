import React from 'react';

const ContactForm = () => {
    return (
        <>
            <section className='py-5'>
                <div style={{height: '100vh'}} className="container">
                    <div className="row d-flex justify-content-center align-items-center">
        
                        <div className="col-md-6 text-start bg-dark p-5 rounded rounded-4 overflow-x-hidden">
                            <h2 data-aos="fade-right" className='h1_color fw-bold text-center'>Get in touch</h2>
                            <form data-aos="fade-up-left" id='form' action="https://formspree.io/f/movjyqae" method='POST'>
                                <div className='pt-3'>
                                    <input className='form-control text-white' id='name' name='name' type="text" placeholder='Name..'/>
                                </div>                            
                                <div className='pt-3'>
                                    <input className='form-control text-white' id='email' name='email' type="email" placeholder='example@gmail.com'/>
                                </div>

                                <div className='py-3'>
                                    <textarea rows={6} className='form-control text-white' name="message" id="message" placeholder='your message..'></textarea>
                                </div>
                                <button type='submit' className='btn btn-primary w-100'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
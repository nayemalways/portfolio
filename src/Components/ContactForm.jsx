import React from 'react';

const ContactForm = () => {
    return (
        <>
            <section className='py-5'>
                <div style={{height: '100vh'}} className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-12 text-center">
                            <h2 className='h1_color fw-bold'>Get in touch</h2>
                        </div>
                        <div className="col-md-6 text-start">
                            <form id='form' action="">
                                <div className='pt-3'>
                                    <input className='form-control text-white' id='name' name='name' type="text" placeholder='Name..'/>
                                </div>                            
                                <div className='pt-3'>
                                    <input className='form-control' id='email' name='email' type="email" placeholder='example@gmail.com'/>
                                </div>

                                <div className='py-3'>
                                    <textarea rows={6} className='form-control' name="message" id="message" placeholder='your message..'></textarea>
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
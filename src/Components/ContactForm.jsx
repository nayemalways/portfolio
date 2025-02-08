import React from 'react';

const ContactForm = () => {
    return (
        <>
            <section className='py-5'>
                <div style={{height: '100vh'}} className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-12 text-center">
                            <h1 className='h1_color fw-bold'>Get in touch</h1>
                        </div>
                        <div className="col-md-6 text-start">
                            <form className='' action="">
                                <div className='pt-2'>
                                    <label className='form-label' htmlFor="name">Name:</label>
                                    <input className='form-control' id='name' name='name' type="text" placeholder='Enter your name'/>
                                </div>                            
                                <div className='pt-2'>
                                    <label className='form-label' htmlFor="email">Email:</label>
                                    <input className='form-control' id='email' name='email' type="email" placeholder='Enter your email'/>
                                </div>

                                <div className='py-2'>
                                    <label className='form-label' htmlFor="message">Message:</label>
                                    <textarea rows={6} className='form-control' name="message" id="message" placeholder='Enter your message here'></textarea>
                                </div>
                                <button type='submit' className='btn btn-primary w-100'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
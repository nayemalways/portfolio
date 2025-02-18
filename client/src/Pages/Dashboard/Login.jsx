import React from 'react';

const Login = () => {
    return (
        <>
        <section>
            <div className="container">
                <div className="row vh-100 d-flex justify-content-center align-items-center"> 
                    <div className="col-12 d-flex justify-content-center">

                        <form className='col-12 col-md-5 col-lg-5 bg-dark p-4 rounded rounded-3 border border-secondary '>
                            <div className="container">
                                <h1 className='h1_color text-center'>Login</h1>
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <label className='form-label d-block text-start' htmlFor="email">Email :</label>
                                        <input className='form-control' type="text" name="email" id="email" placeholder='Enter your email'/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label className='form-label d-block text-start' htmlFor="password">Password :</label>
                                        <input className='form-control' type="password" name="password" id="password" placeholder='Enter your password'/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button className='w-100 btn btn-primary' type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
            
        </>
    );
};

export default Login;
import React from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

import { ApiRequest } from '../../ApiRequest/Api';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    // Page navigatin hook
    const navigate = useNavigate();


    // Form handle using formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: async (values, {resetForm}) => {

            // Hit Login API
            const {status, message, Token} = await ApiRequest("POSt", '/login', values);

            if(status === 'success') {
                Cookies.set('token', Token , { expires: 30 }); // Set cookie
                toast.success(message);
                navigate('/')
            }else {
                toast.error(message);
            }

            // Clear form
             resetForm();
        }
    })



    return (
        <>
        <section>
            <div className="container">
                <div className="row vh-100 d-flex justify-content-center align-items-center"> 
                    <div className="col-12 d-flex justify-content-center">

                        <form onSubmit={formik.handleSubmit} className='col-12 col-md-5 col-lg-5 bg-dark p-4 rounded rounded-3 border border-secondary '>
                            <div className="container">
                                <h1 className='h1_color text-center'>Login</h1>
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <label className='form-label d-block text-start' htmlFor="email">Email :</label>
                                        <input 
                                            onChange={formik.handleChange} 
                                            value={formik.values.email} 
                                            className='form-control' 
                                            type="text" 
                                            name="email" 
                                            id="email" 
                                            placeholder='Enter your email'/>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <label className='form-label d-block text-start' htmlFor="password">Password :</label>
                                        <input 
                                            onChange={formik.handleChange} 
                                            value={formik.values.password}  
                                            className='form-control' 
                                            type="password" 
                                            name="password" id="password" 
                                            placeholder='Enter your password'/>
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
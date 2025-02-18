import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import DashboardLayout from '../../Layout/DashboardLayout.jsx';
import { cloudinaryImageUpload } from '../../Helper/helper.js';
import { ApiRequest } from '../../ApiRequest/Api.js';
import Loader from '../../Components/Main/Loader.jsx';
 

const DashService = () => {

    const [loader, setLoader] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: ''
        },

       validationSchema: Yup.object({
            title: Yup.string().min(5, "Title should at least 5 character").required('Title is required'),
            description: Yup.string().min(5, "Description should at least 5 character").required('Description is required'),
            image: Yup.string().required('Image required')
        }),

        onSubmit: async (values, {resetForm}) => {

            // Turn on loader
            setLoader(true);
            // Post data
            const { status, message } =  await ApiRequest("POST", '/create-service', values);
            // Turn off loader
            setLoader(false);

            // Confirmation toast
            if(status === 'success') {
                toast.success(message);
            }else {
                toast.error(message);
            }

            // Reset form
            resetForm();
        }
    })

    const handleImage = async (e) => {
        try {
            const image = e.target.files[0];
    
            if (image) {
                // Upload image to cloud
                const result = await cloudinaryImageUpload(image);
                if(result) {
                    toast.success('Image uploaded');
                }else{
                    toast.error("Image couldn't uplod");
                }
                
                // set image url to formik
                formik.setFieldValue('image', result);
    
                // cleared the field
                e.target.value = '';
            }
        } catch (e) {
            console.log(e);
        }
    }
    


  


    return (
        <DashboardLayout>
             <section>

                {
                    loader && <Loader/>
                }


                <div className="container">
                    <div className="row d-flex justify-content-center align-content-center h-auto py-5">
                        <div className="col-lg-8 col-md-10 col-12 border border-secondary rounded rounded-4 p-3 bg-dark">
                            <h2 className='color text-center mb-4'>Add Services</h2>
                            
                            <form onSubmit={formik.handleSubmit} id='form'>
                                <div className="container">
                                    <div className="row">
                                        
                                        <div className="col-12 mt-3">
                                            <label className='form-label text-start d-block' htmlFor="title">Title :</label>
                                            <input 
                                                onChange={formik.handleChange} 
                                                value={formik.values.title} 
                                                className='form-control w-100' 
                                                type="text"
                                                name="title" id="title" placeholder='Your service name..' />
                                                {formik.touched.title && formik.errors.title && <span style={{color: "red"}}>{formik.errors.title}</span>}
                                        </div>
                                        
                                        <div className="col-12 mt-3">
                                            <label className='form-label text-start d-block' htmlFor="description">Description :</label>
                                            <textarea 
                                                onChange={formik.handleChange} 
                                                value={formik.values.description}  
                                                className='form-control w-100' 
                                                cols={30} rows={7} 
                                                name="description" 
                                                id="description" 
                                                placeholder='Explain about your services...'></textarea>
                                                {formik.touched.description && formik.errors.description && <span style={{color: "red"}}>{formik.errors.description}</span>}

                                        </div>

                                        <div className="col-12 mt-3">
                                            <label className='form-label text-start d-block' htmlFor="image">Image :</label>
                                            <input
                                                onChange={handleImage} 
                                                accept="image/*" 
                                                className='form-control w-100' 
                                                type="file" 
                                                name="image" 
                                                id="image"  />
                                                {formik.touched.image && formik.errors.image && <span style={{color: "red"}}>{formik.errors.image}</span>}
                                        </div>
                                        
                                        <div className="col-12 mt-3">
                                            <button className='w-100 fw-bold btn color btn-secondary' type='submit'>Send</button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                 
             </section>
        </DashboardLayout>
    );
};

export default DashService;
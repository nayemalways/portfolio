import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import  { useFormik } from 'formik';
import * as Yup from 'yup';

import { getBase64 } from '../../Helper/helper.js';
import { ApiRequest } from './../../ApiRequest/Api.js';
 
import 'quill/dist/quill.snow.css';





const DashBlogForm = ({loader}) => {

    const [loading, setLoading] = useState(false);

    /*This function from Parent components (DashBlog.jsx). 
     Sending true or false for Loading Animations*/
    loader(loading);



    // Handling Form by Formik
    const formik = useFormik(
        {
            initialValues: {
                title: '',
                description: '',
                image: ''
            },
    
            // Validate the form field
            validationSchema: Yup.object({
                title: Yup.string().min(5, "Title should at least 5 character").required('Title is required'),
                description: Yup.string().min(5, "Description should at least 5 character").required('Title is required'),
                image: Yup.string().required('Image required')
            }),
    
            // Form submit
            onSubmit: async (values, {resetForm}) => {

                // Set loading animation when posting blog
                setLoading(true); 
                // Post blog via API to Server
                const result =  await ApiRequest("POST", '/create-blog', values);
                setLoading(false); // Remove loading animation when API has responsed

                 // Reset quill field
                if(result) {
                    if(quill) {
                        quill.root.innerHTML = '';
                    }
                }

                // Reset the form inputs
                resetForm(); 

            }
        }
    )


    // Quilljs text editor text picking up and set in the formik value
    const { quill, quillRef } = useQuill();
    useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            const html = quill.root.innerHTML; // Get HTML content
            formik.setFieldValue('description', html);
          });
        }
      }, [quill]);


      // Image convert to Base64 string and set as formik value
    const handleImage = (e) => {
        const file = e.target.files[0];
        if(file) {
            getBase64(file, (StringBase64) => {
                 formik.setFieldValue("image", StringBase64); // Dynamically update the `img` field
            });
        }

        e.target.value = ''; // Clear field
    }
    
    

    return (
        <>
                
                
            <form id='form' onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">
                                        
                        <div className="col-md-12 mt-3">
                            <label className='form-label' htmlFor="title">Title:</label>
                            <input 
                                onChange={formik.handleChange} 
                                value={formik.values.title}  
                                className='form-control' 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder='Enter title here..' />
                                {formik.touched.title && formik.errors.title && <span style={{color: "red"}}>{formik.errors.title}</span>}
                        </div>


                            <div className='col-md-12 my-5'>
                                <div style={{ width: '100%', height: "25rem" }} className='text-light rounded rounded-sm '>
                                    <div ref={quillRef}   />
                                </div>
                                {formik.touched.description && formik.errors.description && <span style={{color: "red"}}>{formik.errors.description}</span>}
                            </div>

                            
                            <div className="col-md-6 mt-5">
                                <label className='form-label' htmlFor="image">Image:</label>
                                <input 
                                    onChange={handleImage} 
                                    className='form-control' 
                                    type="file" 
                                    name="image" 
                                    id="image"  />
                                    {formik.touched.image && formik.errors.image && <span style={{color: "red"}}>{formik.errors.image}</span>}

                            </div>

                                        
                        <div className="col-md-12 mt-3">
                            <button className='w-100 fw-bold btn color btn-secondary' type='submit'>Send</button>
                        </div>

                                                  
                    </div>
                </div>
            </form>
        </>
    );
};

export default DashBlogForm;
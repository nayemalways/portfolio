 import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { cloudinaryImageUpload } from '../../Helper/helper.js';
import { ApiRequest } from './../../ApiRequest/Api.js';

import 'quill/dist/quill.snow.css';

const DashBlogForm = ({ loader }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loader(loading);
    }, [loading]);

    // Handling Form by Formik
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: ''
        },

        // Validate the form field
        validationSchema: Yup.object({
            title: Yup.string().min(5, "Title should at least 5 characters").required('Title is required'),
            description: Yup.string().min(5, "Description should at least 5 characters").required('Description is required'),
            image: Yup.string().required('Image required')
        }),

        // Form submit
        onSubmit: async (values, { resetForm }) => {
            // Turn on loading
            setLoading(true);
            // Posting blog
            const result = await ApiRequest("POST", '/create-blog', values);
            // Turn off loading
            setLoading(false);

            // Toast message and clear quill
            if (result?.status === 'success') {
                toast.success(result?.message);
                formik.setFieldValue('description', ''); // clear description field
            }

            // Reset the form inputs
            resetForm();
        }
    });

    // Image convert to Base64 string and set as formik value
    const handleImage = async (e) => {
        try {
            const image = e.target.files[0];

            if (image) {
                // Upload image to cloud
                const result = await cloudinaryImageUpload(image);

                if (result) {
                    toast.success('Image uploaded');
                } else {
                    toast.error("Image couldn't upload");
                }

                // Set image URL to formik
                formik.setFieldValue('image', result);

                // Clear the field
                e.target.value = '';
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <form id='form' onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">

                        <div className="col-12 mt-3">
                            <label className='form-label' htmlFor="title">Title:</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.title}
                                className='form-control w-100'
                                type="text"
                                name="title"
                                id="title"
                                placeholder='Enter title here..'
                            />
                            {formik.touched.title && formik.errors.title && <span style={{ color: "red" }}>{formik.errors.title}</span>}
                        </div>

                        <div className='col-12 my-5'>
                            <div className='text-dark rounded rounded-sm'
                                style={{ width: '100%', minHeight: '15rem', overflow: 'hidden' }}>
                                <ReactQuill
                                    value={formik.values.description}
                                    onChange={(content) => formik.setFieldValue('description', content)}
                                    style={{ height: '25rem' }}
                                />
                            </div>
                            {formik.touched.description && formik.errors.description && <span style={{ color: "red" }}>{formik.errors.description}</span>}
                        </div>

                        <div className="col-12 col-md-6 pb-3">
                            <label className='form-label' htmlFor="image">Image:</label>
                            <input
                                onChange={handleImage}
                                className='form-control w-100'
                                type="file"
                                name="image"
                                id="image"
                            />
                            {formik.touched.image && formik.errors.image && <span style={{ color: "red" }}>{formik.errors.image}</span>}
                        </div>

                        <div className="col-12 mt-3">
                            <button className='w-100 fw-bold btn color btn-secondary' type='submit'>Send</button>
                        </div>

                    </div>
                </div>
            </form>
        </>
    );
};

export default DashBlogForm;

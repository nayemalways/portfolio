import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { cloudinaryImageUpload } from '../../Helper/helper';
import { ApiRequest } from '../../ApiRequest/Api';


const FormField = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            experience: '',
            position: '',
            image:''
        },

        validationSchema: Yup.object({
            name: Yup.string().min(2, 'At least 2 characters').required('Name is required'),
            experience: Yup.string().min(5, 'At least 5 characters').required('Experience is required'),
            position: Yup.string().required('Position required'),
            image: Yup.string().required('Image is required')
        }),


        onSubmit: async (values, {resetForm}) => {
            const result = await ApiRequest("POST", '/create-member', values);

            if(result?.status === 'success') {
                toast.success(result?.message);
            }else {
                toast.error(result?.message);
            }

            // Clear Form
            resetForm();
        }
    })



    // --------Handle images and upload Cloudinary---------
    const imageHandler = async (e) => {
        try {
            const image = e.target.files[0];
    
            if (image) {

                const result = await cloudinaryImageUpload(image);
                if(result) { 
                    formik.setFieldValue('image', result); // Set image url to formik field
                    toast.success('Image uploaded');
                }else{
                    toast.error("Image couldn't upload");
                }
                
                // ----cleared the field----
                e.target.value = '';

            }
        } catch (e) {
            console.log(e);
        }
    }



    return (
        <form id='form' className='w-100' onSubmit={formik.handleSubmit} >
            <div className="container ">
                <div className="row">
                     
                    <div className="col-md-6 col-sm-12 m-auto mt-3">
                        <label className='form-label text-start d-block' htmlFor="fullName">Full Name:</label>
                        <input  
                            onChange={formik.handleChange}  
                            value={formik.values.name} 
                            className='form-control' 
                            type="text" 
                            name="name" 
                            id="fullName" 
                            placeholder='Your full name...' />
                            {formik.touched.name && formik.errors.name && <span style={{color: "red"}}>{formik.errors.name}</span>}
                    </div>
                    
                    <div className="col-md-6 col-sm-12   m-auto mt-3">
                        <label className='form-label text-start d-block' htmlFor="experience">Experience:</label>
                        <input  
                            onChange={formik.handleChange}  
                            value={formik.values.experience} 
                            className='form-control' 
                            type="text" 
                            name="experience" 
                            id="experience" 
                            placeholder='eg. 2 years experience' />
                            {formik.touched.experience && formik.errors.experience && <span style={{color: "red"}}>{formik.errors.experience}</span>}
                    </div>

                    <div className="col-md-6 col-sm-12   m-auto mt-3">
                        <label className='form-label text-start d-block' htmlFor="position">Position:</label>
                        <select 
                            onChange={formik.handleChange} 
                            value={formik.values.position} 
                            className='form-control' 
                            name="position" 
                            id="position">
                            <option value="">eg. Software Engineer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Full-stack Developer">Full-stack Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Content Writter">Content Writter</option>
                            <option value="SEO specialist">SEO specialist</option>
                        </select>
                        {formik.touched.position && formik.errors.position && <span style={{color: "red"}}>{formik.errors.position}</span>}
                    </div>
                    
                    <div className="col-md-6 col-sm-6   mt-3">
                        <label className='form-label text-start d-block' htmlFor="image">Image:</label>
                        <input 
                        onChange={imageHandler} 
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
    );
};

export default FormField;
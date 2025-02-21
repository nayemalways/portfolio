import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ApiRequest } from '../../ApiRequest/Api';
import toast from 'react-hot-toast';
import DashboardLayout from '../../Layout/DashboardLayout';
import { cloudinaryImageUpload } from '../../Helper/helper';







const UpdateService = () => {

    const navigate = useNavigate();

    // Get Member Id from URL params
    const { serviceId } = useParams();
    
    // Manage State
    const [_title, setTitle] = useState('');
    const [_description, setDescription] = useState('');
    const [_image, setImage] = useState('');
    const [existingImage, setExistingImage] = useState('');


    // --------Step 1: Get existing data-----------
    useEffect(() => {
        (async ()=> {
            const result = await ApiRequest("GET", `/read-service/${serviceId}`);
            setTitle(result?.data?.title);
            setDescription(result?.data?.description);
            setExistingImage(result?.data?.image);
            
        })()
    }, [])





     // -----------Step 2: Handle images and upload Cloudinary-----------
     const imageHandler = async (e) => {
        try {
            const image = e.target.files[0];
    
            if (image) {
                const result = await cloudinaryImageUpload(image);
                if(result) { 
                    setImage(result);
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






    // -----------Step 3: Handle Form-------------------
    const handleForm = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.description.value;

         const data  = {
            title,
            description,
            image: _image || existingImage
         }

 
  
        //------Send updated data into server-------
        try {
            const result = await ApiRequest("POST", `/update-service/${serviceId}`, data);
            if(result?.status === 'success') {
                toast.success(result?.message);
                navigate("/dashboard");
            }else {
                toast.error(result?.message);
            }
        }catch(e) {
            toast.error(result?.message)
        }
    }
   


   


 

    return (
        <DashboardLayout>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-content-center h-auto py-5 ">
                        <div className="col-lg-8 col-md-10 col-12 bg-dark border border-secondary rounded rounded-4 py-4">
                            <h2 className='color text-center mb-5'>Update Service</h2>


                            <form id='form' className='w-100' onSubmit={handleForm} >
                                <div className="container ">
                                    <div className="row">
                                        
                                        <div className="col-md-12 col-sm-12 m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="title">Title :</label>
                                            <input  
                                                 
                                                defaultValue={_title}
                                                className='form-control' 
                                                type="text" 
                                                name="title" 
                                                id="title" 
                                                placeholder='Your full name...'
                                                required />
                                                 
                                        </div>
                                        
                                        <div className="col-md-12 col-sm-12   m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="description">Description:</label>
                                            <textarea 
                                                defaultValue={_description}
                                                className='form-control' 
                                                rows={4} 
                                                name="description" 
                                                id="description" 
                                                placeholder='Describe about your service...'>
                                            </textarea>
                                         </div>

                                        
                                        <div className="col-md-6 col-sm-6 mt-3">
                                            <label className='form-label text-start d-block' htmlFor="image">Image:</label>
                                            <input 
                                            onChange={ imageHandler} 
                                            className='form-control' 
                                            type="file" 
                                            name="image" 
                                            id="image"
                                             />
                                            
                                        </div>

                                        <div className="col-md-6 col-sm-6 mt-3 d-flex flex-column align-items-center">
                                            <p>Icon preview: </p>
                                            <img style={{maxWidth: "60px"}} className='img-fluid' src={existingImage} alt="" />
                                        </div>

                                        <div className="col-md-12 mt-3">
                                            <button className='w-100 fw-bold btn color btn-secondary' type='submit'>Update</button>
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

export default UpdateService;
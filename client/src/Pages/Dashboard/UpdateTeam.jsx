import React, { useEffect,  useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
 import toast from 'react-hot-toast';

import DashboardLayout from '../../Layout/DashboardLayout';
import { ApiRequest } from '../../ApiRequest/Api';
import { cloudinaryImageUpload } from '../../Helper/helper';







const UpdateTeam = () => {

    const navigate = useNavigate();

    // Get Member Id from URL params
    const { memberId } = useParams();
    
    // Manage State
    const [_name, setName] = useState('');
    const [_experience, setExperience] = useState('');
    const [_position, setPosition] = useState('');
    const [_image, setImage] = useState('');
    const [existingImage, setExistingImage] = useState('');



    // --------Step 1: Get existing data-----------
    useEffect(() => {
        (async ()=> {
            const result = await ApiRequest("GET", `/read-member/${memberId}`);
            // setMember(result.data);
            setName(result?.data?.name);
            setExperience(result?.data?.experience);
            setPosition(result?.data?.position);
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

        const name = e.target.fullName.value;
        const position = e.target.position.value;
        const experience = e.target.experience.value;

         const data  = {
            name: name,
            position: position,
            experience: experience,
            image: _image || existingImage
         }
  
        //------Send updated data into server-------
        try {
            const result = await ApiRequest("POST", `/update-member/${memberId}`, data);
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
                            <h2 className='color text-center mb-5'>Update Team Member</h2>


                            <form id='form' className='w-100' onSubmit={handleForm} >
                                <div className="container ">
                                    <div className="row">
                                        
                                        <div className="col-md-6 col-sm-12 m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="fullName">Full Name:</label>
                                            <input  
                                                 
                                                defaultValue={_name}
                                                className='form-control' 
                                                type="text" 
                                                name="fullName" 
                                                id="fullName" 
                                                placeholder='Your full name...'
                                                required />
                                                 
                                        </div>
                                        
                                        <div className="col-md-6 col-sm-12   m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="experience">Experience:</label>
                                            <input  
                                                defaultValue={_experience}
                                                className='form-control' 
                                                type="text" 
                                                name="experience" 
                                                id="experience" 
                                                placeholder='eg. 2 years experience' 
                                                required/>
                                         </div>

                                        <div className="col-md-12 col-sm-12 m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="position">Position:</label>
                                            <select 
                                                value={_position}
                                                onChange={(e) => setPosition(e.target.value)}
                                                className='form-control' 
                                                name="position" 
                                                id="position"
                                                required>
                                                <option value="">eg. Software Engineer</option>
                                                <option value="Frontend Developer">Frontend Developer</option>
                                                <option value="Backend Developer">Backend Developer</option>
                                                <option value="Full-stack Developer">Full-stack Developer</option>
                                                <option value="UI/UX Designer">UI/UX Designer</option>
                                                <option value="Content Writter">Content Writter</option>
                                                <option value="SEO specialist">SEO specialist</option>
                                            </select>
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
                                            <p>Image Preview: </p>
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

export default UpdateTeam;
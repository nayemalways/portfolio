import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const DashBlogForm = () => {
    const { quill, quillRef } = useQuill();

    return (
        <>
            <form>
                <div className="container">
                    <div className="row">
                                        
                        <div className="col-md-12  mt-3">
                            <label className='form-label' htmlFor="fullName">Title:</label>
                            <input className='form-control' type="text" name="fullName" id="fullName" placeholder='Enter title here..' />
                        </div>


                            <div className='col-md-12 my-5'>
                                <div style={{ width: '100%', height: "25rem" }} className='text-light rounded rounded-sm '>
                                    <div ref={quillRef} />
                                </div>
                            </div>

                            
                            <div className="col-md-6 mt-5">
                                <label className='form-label' htmlFor="image">Image:</label>
                                <input className='form-control' type="file" name="image" id="image"  />
                            </div>

                                        
                        <div className="col-md-12 mt-3">
                            <button className='w-100 fw-bold fs-5 btn color btn-secondary' type='submit'>Send</button>
                        </div>

                                        
                                        
                    </div>
                </div>
            </form>
        </>
    );
};

export default DashBlogForm;
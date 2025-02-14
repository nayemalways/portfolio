import React from 'react';

const FormField = () => {
    return (
        <form id='form' className='w-100'>
            <div className="container ">
                <div className="row">
                     
                    <div className="col-md-6 col-sm-12   m-auto mt-3  ">
                        <label className='form-label text-start d-block' htmlFor="fullName">Full Name:</label>
                        <input className='form-control' type="text" name="fullName" id="fullName" placeholder='Your full name..' />
                    </div>
                    
                    <div className="col-md-6 col-sm-12   m-auto mt-3">
                        <label className='form-label text-start d-block' htmlFor="experience">Experience:</label>
                        <input className='form-control' type="text" name="experience" id="experience" placeholder='eg. 2 years experience' />
                    </div>

                    <div className="col-md-6 col-sm-12   m-auto mt-3">
                        <label className='form-label text-start d-block' htmlFor="fullName">Position:</label>
                        <select className='form-control' name="" id="">
                            <option value="">eg. Software Engineer</option>
                            <option value="Web Developer">Frontend Developer</option>
                            <option value="Web Developer">Backend Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Content Writter">Content Writter</option>
                            <option value="SEO specialist">SEO specialist</option>
                        </select>
                    </div>
                    
                    <div className="col-md-6 col-sm-6   mt-3">
                        <label className='form-label text-start d-block' htmlFor="image">Image:</label>
                        <input className='form-control' type="file" name="image" id="image"  />
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
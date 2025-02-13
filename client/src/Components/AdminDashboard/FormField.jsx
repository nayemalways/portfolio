import React from 'react';

const FormField = () => {
    return (
        <form>
            <div className="container">
                <div className="row">
                     
                    <div className="col-md-6 mt-3">
                        <label className='form-label' htmlFor="fullName">Full Name:</label>
                        <input className='form-control' type="text" name="fullName" id="fullName" placeholder='Your full name..' />
                    </div>
                    
                    <div className="col-md-6 mt-3">
                        <label className='form-label' htmlFor="experience">Experience:</label>
                        <input className='form-control' type="text" name="experience" id="experience" placeholder='eg. 2 years experience' />
                    </div>

                    <div className="col-md-6 mt-3">
                        <label className='form-label' htmlFor="fullName">Position:</label>
                        <select className='form-control' name="" id="">
                            <option value="">Choose Position</option>
                            <option value="Web Developer">Frontend Developer</option>
                            <option value="Web Developer">Backend Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Content Writter">Content Writter</option>
                            <option value="SEO specialist">SEO specialist</option>
                        </select>
                    </div>
                    
                    <div className="col-md-6 mt-3">
                        <label className='form-label' htmlFor="image">Image:</label>
                        <input className='form-control' type="file" name="image" id="image"  />
                    </div>
                    <div className="col-md-12 mt-3">
                        <button className='w-100 fw-bold fs-5 btn color btn-dark' type='submit'>Send</button>
                    </div>

                    
                    
                </div>
            </div>
        </form>
    );
};

export default FormField;
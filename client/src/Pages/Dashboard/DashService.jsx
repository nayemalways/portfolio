import React from 'react';
import DashboardLayout from '../../Components/AdminDashboard/DashboardMasterLayout/DashboardLayout';
 

const DashService = () => {
    return (
        <DashboardLayout>
             <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-content-center h-auto py-5">
                        <div className="col-md-8">
                            <h2 className='color text-center mb-5'>Add Services</h2>
                             
                            <form>
                                <div className="container">
                                    <div className="row">
                                        
                                        <div className="col-md-6 mt-3">
                                            <label className='form-label' htmlFor="fullName">Service Name:</label>
                                            <input className='form-control' type="text" name="fullName" id="fullName" placeholder='Your service name..' />
                                        </div>
                                        
                                        <div className="col-md-6 mt-3">
                                            <label className='form-label' htmlFor="experience">Service Brief:</label>
                                            <input className='form-control' type="text" name="experience" id="experience" placeholder='Explain about your service' />
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
                        </div>
                    </div>
                </div>
             </section>
        </DashboardLayout>
    );
};

export default DashService;
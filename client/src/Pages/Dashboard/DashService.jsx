import React from 'react';
import DashboardLayout from '../../Components/AdminDashboard/DashboardMasterLayout/DashboardLayout';
 

const DashService = () => {
    return (
        <DashboardLayout>
             <section>
                <div className="container ">
                    <div className="row d-flex justify-content-center align-content-center h-auto py-5">
                        <div  className="col-lg-8 col-md-8 col-10 border border-secondary rounded rounded-4 p-3 bg-dark">
                            <h2 className='color text-center mb-4'>Add Services</h2>
                             
                            <form id='form' className='p-sm'>
                                <div className="container">
                                    <div className="row">
                                        
                                        <div className="col-lg-8 col-md-10 m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="serviceName">Service Name:</label>
                                            <input className='form-control' type="text" name="serviceName" id="serviceName" placeholder='Your service name..' />
                                        </div>
                                        
                                        <div className="col-lg-8 col-md-10 m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="serviceDetails">Service Explain:</label>
                                            <textarea className='form-control' cols={30} rows={7} name="serviceDetails" id="serviceDetails" placeholder='Explain about your services...'></textarea>
                                         </div>

                                        <div className="col-lg-8 col-md-10 m-auto mt-3">
                                            <label className='form-label text-start d-block' htmlFor="image">Image:</label>
                                            <input className='form-control' type="file" name="image" id="image"  />
                                        </div>
                                        
                                        <div className="col-lg-8 col-md-10 m-auto mt-3">
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
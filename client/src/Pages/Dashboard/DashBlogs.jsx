import React, { useState } from 'react';


import DashboardLayout from '../../Layout/DashboardLayout';
import DashBlogForm from '../../Components/AdminDashboard/DashBlogForm';
import Loader from '../../Components/Main/LoaderDashboard';
 

const DashBlogs = () => {

    const [loading, setLoading] = useState(false);

    // This function called in Child components (DashBlogForm.jsx) via props
    const loader = (isLoading) => {
        setLoading(isLoading);
     }


    return (
        <DashboardLayout>


              <section>
                    {/* Set loading animation  */}
                    { loading && <Loader/>}


                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center h-auto py-5">
                            <div data-aos="fade-in"  className="col-12 col-md-10 col-lg-8 bg-dark py-5 border border-secondary rounded rounded-4">
                                <h2 className='color text-center mb-5'>Add Blogs</h2>
                                <DashBlogForm loader={loader} />
                            </div>
                        </div>
                    </div>

             </section>
        </DashboardLayout>
    );
};

export default DashBlogs;
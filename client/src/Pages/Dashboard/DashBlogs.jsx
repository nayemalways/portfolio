import React from 'react';


import DashboardLayout from '../../Components/AdminDashboard/DashboardMasterLayout/DashboardLayout';
import DashBlogForm from '../../Components/AdminDashboard/DashBlogForm';

const DashBlogs = () => {

    return (
        <DashboardLayout>
              <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-content-center h-auto py-5">
                        <div className="col-md-10">
                            <h2 className='color text-center mb-5'>Add Blogs</h2>
                             
                            <DashBlogForm />
                        </div>
                    </div>
                </div>
             </section>
        </DashboardLayout>
    );
};

export default DashBlogs;
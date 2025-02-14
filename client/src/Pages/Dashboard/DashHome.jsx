import React from 'react';


import DashboardLayout from '../../Components/AdminDashboard/DashboardMasterLayout/DashboardLayout';
import Table from '../../Components/AdminDashboard/Table';

const DashHome = () => {
    return (
        <DashboardLayout>
            <section>
                <div className="container py-5">
                    <div className="row vh-100 ">

                        {/* Blog Section Table  */}
                        <Table title='Blog overview'/>

                        {/* Team Section Table  */}
                        <Table title='Team overview'/>

                        {/* Service Section Table  */}
                        <Table title='Service overview'/>
                    
                        
                         
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
};

export default DashHome;


/*
    <div className='h-25 bg-dark d-flex justify-content-center align-items-center'>
        h3 className='color text-center fw-bolder'>Manage Dashboard</h3>
    </div>
*/
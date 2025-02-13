import React from 'react';

 import DashboardLayout from '../../Components/AdminDashboard/DashboardMasterLayout/DashboardLayout';
import FormField from '../../Components/AdminDashboard/FormField';

const DashTeam = () => {
    return (
        <DashboardLayout>
             <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-content-center h-auto py-5">
                        <div className="col-md-8">
                            <h2 className='color text-center mb-5'>Add Team Member</h2>
                            <FormField />
                        </div>
                    </div>
                </div>
             </section>
        </DashboardLayout>
    );
};

export default DashTeam;
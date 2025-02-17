import React, { useEffect, useState } from 'react';


import DashboardLayout from '../../Components/AdminDashboard/DashboardMasterLayout/DashboardLayout';
import Table from '../../Components/AdminDashboard/Table';
import { ApiRequest } from '../../ApiRequest/Api';

const DashHome = () => {

    const [blog, setBlog] = useState([]);
    const [service, setService] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        (async () => {
            const blogs = await ApiRequest('GET', '/read-blog');
            const services = await ApiRequest('GET', '/read-service');
            const teams = await ApiRequest('GET', '/read-member');

            // Set data in state
            setBlog(blogs.data);
            setService(services.data);
            setTeam(teams.data);
        })()
    }, [])


    return (
        <DashboardLayout>
            <section>
                <div className="container py-5">
                    <div className="row vh-100 ">

                        {/* Team Section Table  */}
                        <Table data={team} title='Team overview'/>

                        {/* Service Section Table  */}
                        <Table data={service} title='Service overview'/>
                    
                        {/* Blog Section Table  */}
                        <Table  data={blog} title='Blog overview'/>
                        
                         
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
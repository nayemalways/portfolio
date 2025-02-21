import React, { useEffect, useState } from 'react';

import DashboardLayout from '../../Layout/DashboardLayout';
import Table from '../../Components/AdminDashboard/Table';
import { ApiRequest } from '../../ApiRequest/Api';
import Loader from '../../Components/Main/LoaderDashboard';




const DashHome = () => {

    


    // Manage State
    const [blog, setBlog] = useState([]);
    const [service, setService] = useState([]);
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);


    // Call API
    useEffect(() => {
        (async () => {
            const blogs = await ApiRequest('GET', '/read-blog');
            const services = await ApiRequest('GET', '/read-service');
            const teams = await ApiRequest('GET', '/read-member');

            // Set data in state
            setBlog(blogs.data);
            setService(services.data);
            setTeam(teams.data);

            // Turn off loading
            setLoading(false);
        })()
    }, [])


    /* 
        ***Note: 
        When delete any item from Table.jsx the Data will update by recall-API. 
        "updateData" function called inside Table.jsx

        ***Important: 
        "section" is my props value for recognization specifik table.
        And based on section All the API has called in Table.jsx 
    */
    const updateData = (data, section) => {
        // Update state when Data has changed in Table.jsx 
       if(section === "member") {
        setTeam(data);
       }else if (section === "service") {
        setService(data);
       }else if (section === "blog") {
        setBlog(data);
       }

    }


    return (
        <DashboardLayout>
            <section>
                <div className="container py-5">
                    <div className="row vh-100 ">

                        {/* Team Section Table  */} 
                        {
                            loading ? ( <Loader/>):( <Table updatePage={updateData} data={team} section='member' title='Team overview'/> )
                        }

                        {/* Service Section Table  */}
                       
                        {
                            loading ? (  <Loader/>):( <Table  updatePage={updateData} data={service} section='service' title='Service overview'/> )
                        }


                        {/* Blog Section Table  */}
                        {
                            loading ? ( <Loader/>):(  <Table  updatePage={updateData}  data={blog} section='blog' title='Blog overview'/> )
                        }
                        
                         
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
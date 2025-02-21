import React, { useEffect, useState } from 'react';

import Layout from '../../Layout/Layout';
import ServiceCard from '../../Components/Main/ServiceCard';
import { ApiRequest } from '../../ApiRequest/Api';
import BootstrapLoader from '../../Components/Main/BootstrapLoader';



const Service = () => {

    // Mangae State
    const [ service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Call APi and Load Data
    useEffect(() => {
        (async () => {
            const result = await ApiRequest("GET", "/read-service");
            setService(result.data);
            setLoading(false);
        })()
    }, [])

 


    return (
        <Layout>
            <section>
                <div className="container py-5">

                {
                    loading ? (<BootstrapLoader />):(
                        <div className="row h-100 d-flex justify-content-center  ">
                        <div className="col-md-12">
                            <h1 data-aos="fade-right" className='h1_color fw-bold text-center'>Our services</h1>

                            <div className='pt-5  d-flex flex-wrap gap-4 justify-content-center align-items-center'>
                                
                                 {
                                    service.map((item, index) => {
                                        return <ServiceCard key={index} data={item} />;
                                    })
                                 }
                            </div>
                        </div>
                    </div>    
                    )
                }
                    
                </div>
            </section>
            
        </Layout>
    );
};

export default Service;
import React from 'react';

import Layout from '../../Layout/Layout';
import ServiceCard from '../../Components/Main/ServiceCard';



const Service = () => {
    return (
        <Layout>
            <section>
                <div className="container py-5">
                    <div className="row h-100 d-flex justify-content-center  ">
                        <div className="col-md-12">
                            <h1 className='h1_color fw-bold text-center'>Our services</h1>

                            <div className='pt-5  d-flex flex-wrap gap-4 justify-content-center align-items-center'>
                                <ServiceCard />
                                <ServiceCard />
                                <ServiceCard />
                                <ServiceCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </Layout>
    );
};

export default Service;
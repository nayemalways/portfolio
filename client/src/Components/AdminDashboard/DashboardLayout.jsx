import React from 'react';
import Sidebar from './Sidebar';
import Footer from '../Footer';

const DashboardLayout = ({children}) => {
    return (
        < >
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-2 bg-light ps-4 pt-3 vh-100  ">
                             <h4 className='text-primary fw-bold'>Dashboard</h4>
                             <Sidebar/>
                        </div>
                        <div className="col-md-10 col-lg-10 col-10 vh-100 overflow-y-scroll">


                              {children}


                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    );
};

export default DashboardLayout;
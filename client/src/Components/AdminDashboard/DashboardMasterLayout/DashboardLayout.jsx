import React from 'react';
import Sidebar from '../Sidebar';
 
const DashboardLayout = ({children}) => {
    return (
        < >
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-2 m-0 p-0 ">
                             <Sidebar/>
                        </div>
                        <div className="col-md-10 col-lg-10 col-10 vh-100   p-0">


                              {children}


                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default DashboardLayout;
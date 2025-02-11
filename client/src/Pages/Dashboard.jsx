import React from 'react';
import Layout from '../Layout/Layout';
import { RiMenuFold2Line } from "react-icons/ri";



const Dashboard = () => {
    return (
        <Layout>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <RiMenuFold2Line />
            </button>

            <div class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h2 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Dashboard</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
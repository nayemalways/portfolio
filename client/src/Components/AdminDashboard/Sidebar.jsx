import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaHome } from "react-icons/fa";
import { RiBloggerFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";




const Sidebar = () => {

    const {pathname} = useLocation();

    return (
        <div className="sidebar vh-100 w-100  border-end border-secondary">
                <div className='h-100 overflow-hidden '>
                    <Link to='/dashboard' className='text-decoration-none'>
                        <h4 className='dashboard-logo fw-bolder mt-4 ps-4'>
                            <MdDashboard className='d-none dashboard-icon h1' /> 
                            <p>Dashboard</p>
                        </h4>
                    </Link>

                    <ul className='mt-5'>
                        <li className={`nav-item ${(pathname === '/dashboard') ? 'active' : ''}`}> 
                            <Link to='/dashboard' className='nav-link'><FaHome/> <span>Home</span></Link>
                        </li>
                        <li className={`nav-item ${(pathname === '/dashboard/blogs') ? 'active' : ''}`}>
                            <Link  to='/dashboard/blogs' className='nav-link'><RiBloggerFill />  <span>Blog</span></Link>
                        </li>
                        <li className={`nav-item ${(pathname === '/dashboard/teams') ? 'active' : ''}`}>
                            <Link to='/dashboard/teams' className='nav-link'><BsFillPeopleFill />  <span>Team</span></Link>
                        </li>
                        <li className={`nav-item ${(pathname === '/dashboard/services') ? 'active' : ''}`}>
                            <Link to='/dashboard/services' className='nav-link'><RiCustomerServiceFill /> <span>Service</span></Link>
                        </li>
                    </ul>    
                </div>               
        </div>
    );
};

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";
import { RiBloggerFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";




const Sidebar = () => {
    return (
        <div className="sidebar bg-white">
                 <ul className=''>
                    <li className='nav-item '>
                        <span className='d-flex gap-1 align-items-center text-dark fs-5'>
                            <FaHome/>
                            <Link to='/dashboard/' className='nav-link'>Home</Link>
                        </span>
                    </li>
                    <li className='nav-item'>
                        <span className='d-flex gap-1 align-items-center text-dark fs-5'>
                            <RiBloggerFill />
                            <Link  to='/dashboard/blogs' className='nav-link'>Blog</Link>
                        </span>
                    </li>
                    <li className='nav-item'>
                        <span className='d-flex gap-1 align-items-center text-dark fs-5'>
                            <BsFillPeopleFill />
                            <Link to='/dashboard/teams' className='nav-link'>Team</Link>
                        </span>
                    </li>
                    <li className='nav-item'>
                        <span className='d-flex gap-1 align-items-center text-dark fs-5'>
                        <RiCustomerServiceFill />
                            <Link to='/dashboard/services' className='nav-link'>Services</Link>
                        </span>
                    </li>
                 </ul>               
        </div>
    );
};

export default Sidebar;
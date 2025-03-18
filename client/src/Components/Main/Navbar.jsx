import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {

    const [showMenu, setshowMenu] = useState(false);
    const handleNavbarToggler= () => {
        setshowMenu(!showMenu);
    }


    return (
        <>
            <header className='navigation d-flex justify-content-center align-items-center flex-column '>
                <div className="container ">
                    <div className="row ">

                        {/* Logo side  */}
                        <div className="col-md-4 col-4 d-flex align-items-end ">
                            <div className="">
                                <Link to='/' className='text-decoration-none'>
                                    <h4 className='text-white'>nayem<span className='text-primary'>.dev</span></h4>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Nav Link side  */}
                        <nav className={`col-md-8 col-8  ${showMenu ? 'mobile-menu' : 'web-menu'}`} >
                           <div className='d-flex justify-content-end  ul-parent'>
                                <ul  className='nav__link h-100 '>
                                    <li>
                                    <NavLink to="/" className={({ isActive }) => `link-style text-decoration-none h6 ${isActive ? "text-info fw-bold" : "text-light"}`}>
                                        Home
                                        </NavLink>
                                     </li>
                                    <li>
                                        <NavLink to='/team' className={({ isActive }) => `link-style text-decoration-none h6 ${isActive ? "text-info fw-bold" : "text-light"}`} >Team</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  to='/blog' className={({ isActive }) => `link-style text-decoration-none h6 ${isActive ? "text-info fw-bold" : "text-light"}`}>Blog</NavLink>
                                    </li>        
                                </ul>
                           </div>
                        </nav>

                         
                        <div className='col-md-8 col-8 ham-menu'>
                            <button onClick={handleNavbarToggler} className='text-white bg-dark btn'>
                                <RiMenu3Fill />
                            </button>
                        </div>
                        
                         
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                                        <Link className='text-decoration-none text-light h6' to={'/'}>Home</Link>
                                    </li>
                                    <li>
                                        <Link className='text-decoration-none text-light h6' to={'/team'}>Team</Link>
                                    </li>
                                    <li>
                                        <Link className='text-decoration-none text-light h6' to={'/blog'}>Blog</Link>
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
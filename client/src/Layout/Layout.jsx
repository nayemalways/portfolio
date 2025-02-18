import React from 'react';
import Navbar from '../Components/Main/Navbar';
import Footer from '../Components/Main/Footer';
 

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
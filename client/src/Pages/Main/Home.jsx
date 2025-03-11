import React from 'react';
import Layout from '../../Layout/Layout';
import HeroSection from '../../Components/Main/HeroSection';
import AboutSection from '../../Components/Main/AboutSection';
import ServiceSection from '../../Components/Main/ServiceSection';
import ContactForm from '../../Components/Main/ContactForm';


const Home = () => {

     
 

     
    return (
        <Layout>
            <HeroSection/>
            <AboutSection />
            <ServiceSection />
            <ContactForm/>
        </Layout>
    );
};

export default Home;
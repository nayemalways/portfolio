import React from 'react';
import Layout from '../../Layout/Layout';
import HeroSection from '../../Components/Main/HeroSection';
import AboutSection from '../../Components/Main/AboutSection';
import ServiceSection from '../../Components/Main/ServiceSection';
import ContactForm from '../../Components/Main/ContactForm';
import BgAnimation from '../../Components/Main/BgAnimation';


const Home = () => {
    return (
        <Layout>
            <BgAnimation />
            <HeroSection/>
            <AboutSection />
            <ServiceSection />
            <ContactForm/>
        </Layout>
    );
};

export default Home;
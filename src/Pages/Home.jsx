import React from 'react';
import Layout from '../Layout/Layout';
import HeroSection from '../Components/HeroSection';
import BlogSection from '../Components/BlogSection';


const Home = () => {
    return (
        <Layout>
            <HeroSection/>
            <BlogSection/>
        </Layout>
    );
};

export default Home;
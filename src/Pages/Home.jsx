import React from 'react';
import Layout from '../Layout/Layout';
import HeroSection from '../Components/HeroSection';
import BlogSection from '../Components/BlogSection';


const Home = () => {

    const blogData = {
        title: "Latest blog",
        subtitle: "Be updated with latest technology in the world."
    }

    return (
        <Layout>
            <HeroSection/>
            <BlogSection {...blogData}/>
        </Layout>
    );
};

export default Home;
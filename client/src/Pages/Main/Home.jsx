import React from 'react';
import Layout from '../../Layout/Layout';
import HeroSection from '../../Components/Main/HeroSection';
import BlogSection from '../../Components/Main/BlogSection';


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
import React from 'react';
import Layout from '../Layout/Layout';
import AboutSection from '../Components/AboutSection';
import TeamSection from '../Components/TeamSection';

const About = () => {
    return (
        <Layout>
             <AboutSection />
             <TeamSection />
        </Layout>
    );
};

export default About;
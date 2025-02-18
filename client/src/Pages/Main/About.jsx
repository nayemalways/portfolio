import React from 'react';
import Layout from '../../Layout/Layout';
import AboutSection from '../../Components/Main/AboutSection';
import TeamSection from '../../Components/Main/TeamSection';

const About = () => {
    return (
        <Layout>
             <AboutSection />
             <TeamSection />
        </Layout>
    );
};

export default About;
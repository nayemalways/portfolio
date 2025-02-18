import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import AboutSection from '../../Components/Main/AboutSection';
import TeamSection from '../../Components/Main/TeamSection';
import { ApiRequest } from '../../ApiRequest/Api';

const About = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ApiRequest("GET", '/read-member');
            setTeam(result.data);
        })()
    }, [])

 


    return (
        <Layout>
             <AboutSection />
             <TeamSection data={team} />
        </Layout>
    );
};

export default About;
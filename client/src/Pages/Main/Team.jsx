import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import TeamSection from '../../Components/Main/TeamSection';
import { ApiRequest } from '../../ApiRequest/Api';

const Team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ApiRequest("GET", '/read-member');
            setTeam(result.data);
        })()
    }, [])

 


    return (
        <Layout>
              
             <TeamSection data={team} />
        </Layout>
    );
};

export default Team;
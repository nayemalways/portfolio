import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import HeroSection from '../../Components/Main/HeroSection';
import { ApiRequest } from '../../ApiRequest/Api';
import HomeBlog from '../../Components/Main/HomeBlog';


const Home = () => {

    const [blog, setBlog] = useState([]);
    
        useEffect(() => {
            (async () => {
                const result = await ApiRequest('GET', '/read-blog');
                setBlog(result.data);
            })()
        }, [])
    
 

     
    return (
        <Layout>
            <HeroSection/>
             <HomeBlog data={blog} />
        </Layout>
    );
};

export default Home;
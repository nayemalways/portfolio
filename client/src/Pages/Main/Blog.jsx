import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import BlogSection from '../../Components/Main/BlogSection';
import { ApiRequest } from '../../ApiRequest/Api';
 

const Blog = () => {

    const [blog, setBlog] = useState([]);
        
    useEffect(() => {
        (async () => {
             const result = await ApiRequest('GET', '/read-blog');
             setBlog(result.data);
        })()
    }, [])
        
     
    return (
        <Layout>
            <BlogSection data={blog}/>
        </Layout>
    );
};

export default Blog;
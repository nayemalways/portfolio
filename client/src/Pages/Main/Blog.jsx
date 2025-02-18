import React from 'react';
import Layout from '../../Layout/Layout';
import BlogSection from '../../Components/Main/BlogSection';
 

const Blog = () => {
    const blogData = {
        title: "Read all our blogs",
        display_none: "none",  // This is for 'View all" link hiding in blogSection components
    }
    return (
        <Layout>
            <BlogSection {...blogData}/>
        </Layout>
    );
};

export default Blog;
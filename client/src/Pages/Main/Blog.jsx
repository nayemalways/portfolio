import  { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import BlogSection from '../../Components/Main/BlogSection';
import { ApiRequest } from '../../ApiRequest/Api';
import BootstrapLoader from '../../Components/Main/BootstrapLoader';
 

const Blog = () => {

    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    
        
    useEffect(() => {
        (async () => {
             const result = await ApiRequest('GET', '/read-blog');
             setBlog(result.data); // Data
             setLoading(false); // Loader
        })()
    }, [])
        
     
    return (
        <Layout>

            {
                loading ? (<BootstrapLoader />) : ( <BlogSection data={blog}/>)
            }
           
             
        </Layout>
    );
};

export default Blog;
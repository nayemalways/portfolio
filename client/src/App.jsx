import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import BlogDetails from './Pages/BlogDetails';
import DashService from './Pages/Dashboard/DashService';
import DashBlogs from './Pages/Dashboard/DashBlogs';
import DashTeam from './Pages/Dashboard/DashTeam';
import DashHome from './Pages/Dashboard/DashHome';
import Update from './Pages/Dashboard/Update';



 const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Main page routing */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog-details" element={<BlogDetails />} />

          {/* Dashboard Routing */}
          <Route path="/dashboard" element={<DashHome />} />
          <Route path="/dashboard/blogs" element={<DashBlogs />} />
          <Route path="/dashboard/teams" element={<DashTeam />} />
          <Route path="/dashboard/services" element={<DashService />} />
          <Route path="/dashboard/update" element={<Update />} />

        </Routes>
      </BrowserRouter>
    </>
  );
 };
 
 export default App;
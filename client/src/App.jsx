import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Main/Home';
import Blog from './Pages/Main/Blog';
import BlogDetails from './Pages/Main/BlogDetails';
import DashService from './Pages/Dashboard/DashService';
import DashBlogs from './Pages/Dashboard/DashBlogs';
import DashTeam from './Pages/Dashboard/DashTeam';
import DashHome from './Pages/Dashboard/DashHome';
import Login from './Pages/Dashboard/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateTeam from './Pages/Dashboard/UpdateTeam';
import UpdateService from './Pages/Dashboard/UpdateService';
import Team from './Pages/Main/Team';



 const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Main page routing */}
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details/:blogId" element={<BlogDetails />} />

          {/* Dashboard Routing */}
          <Route path="/dashboard" element={<PrivateRoute><DashHome /></PrivateRoute>}  />
          <Route path="/dashboard/blogs" element={<DashBlogs />} />
          <Route path="/dashboard/teams" element={<DashTeam />} />
          <Route path="/dashboard/services" element={<DashService />} />
          <Route path="/dashboard/update-member/:memberId" element={<UpdateTeam />} />
          <Route path="/dashboard/update-service/:serviceId" element={<UpdateService />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
 };
 
 export default App;
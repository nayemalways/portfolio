import express from "express";
import { userAuthentication } from './../middleware/authMiddleware.js';
import * as userController from "../controllers/userController.js";
import  * as blogController from "../controllers/blogController.js";
import * as ourServiceController from "../controllers/ourServiceController.js";
import * as teamController from "../controllers/teamsController.js";
 



// Express Router
const router = express.Router();


// Admin Login
router.post('/login', userController.Login);


// Blog related API
router.post('/create-blog', userAuthentication, blogController.createBlog);
router.post('/update-blog/:blogId', userAuthentication, blogController.updateBlog);
router.get('/read-blog', blogController.readBlog);
router.get('/blog-details/:blogId', blogController.blogDetails);
router.get('/delete-blog/:blogId', userAuthentication, blogController.deleteBlog);


// Service related API
router.post('/create-service', userAuthentication, ourServiceController.createService);
router.get('/read-service',  ourServiceController.readService);
router.get('/read-service/:serviceId', userAuthentication,  ourServiceController.singelServiceByID);
router.post('/update-service/:serviceId', userAuthentication, ourServiceController.updateService );
router.get('/delete-service/:serviceId', userAuthentication, ourServiceController.deleteService );

// Team member related API
router.post('/create-member', userAuthentication, teamController.createMember);
router.get('/read-member',   teamController.readMember);
router.get('/read-member/:memberId', userAuthentication,  teamController.readMemberByID);
router.post('/update-member/:memberId', userAuthentication, teamController.updateMember);
router.get('/delete-member/:memberId', userAuthentication, teamController.deleteMember);


// Team related APi



export default router;
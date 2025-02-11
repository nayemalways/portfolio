import express from "express";
import * as userController from "../controllers/userController.js";
import  * as blogController from "../controllers/blogController.js";
import { userAuthentication } from './../middleware/authMiddleware.js';
import * as ourServiceController from "../controllers/ourServiceController.js";
 
// Express Router
const router = express.Router();


// Admin Login
router.post('/login', userController.Login);


// Blog related API
router.post('/create-blog', userAuthentication, blogController.createBlog);
router.post('/update-blog/:blogId', userAuthentication, blogController.updateBlog);
router.get('/read-blog', userAuthentication, blogController.readBlog);
router.get('/delete-blog/:blogId', userAuthentication, blogController.deleteBlog);


// Service related API
router.post('/create-service', userAuthentication, ourServiceController.createService);
router.get('/read-service', userAuthentication, ourServiceController.readService);
router.post('/update-service/:serviceId', userAuthentication, ourServiceController.updateService );
router.get('/delete-service/:serviecId', userAuthentication, ourServiceController.deleteService );



export default router;
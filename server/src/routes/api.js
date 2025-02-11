import express from "express";
import * as userController from "../controllers/userController.js";
import { userAuthentication } from './../middleware/authMiddleware.js';
import  * as blogController from "../controllers/blogController.js";
 

const router = express.Router();

// Admin Login
router.post('/login', userController.Login);


// Blog related API
router.post('/create-blog', userAuthentication, blogController.createBlog);
router.post('/update-blog/:blogId', userAuthentication, blogController.updateBlog);
router.get('/read-blog', userAuthentication, blogController.readBlog);
router.get('/delete-blog/:blogId', userAuthentication, blogController.deleteBlog);


export default router;
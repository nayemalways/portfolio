import express from "express";
import * as userController from "../controllers/userController.js";
 

const router = express.Router();


router.post('/login', userController.Login);


export default router;
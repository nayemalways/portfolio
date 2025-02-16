import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import router from './src/routes/api.js'

import {DATABASE_URL, USER_NAME, PASSWORD, PORT, URL_ENCODE, MAX_JSON_SIZE, MAX_REQUEST_TIME, MAX_REQUEST_NUMBER, WEB_CACHE} from  './src/config/config.js';

// Express App
const app = express();

// Global Applications middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODE}));

// Rate Limiting
const Limitter = rateLimit({windowMs: MAX_REQUEST_TIME, max: MAX_REQUEST_NUMBER});
app.use(Limitter);

// Web Cache
app.set('etag', WEB_CACHE);

// MongoDB connection
const options = {
    user: USER_NAME,
    pass: PASSWORD,
    autoIndex: true,
    serverSelectionTimeoutMS: 30000
}

mongoose.connect( DATABASE_URL,options)
.then(() => console.log("Database Connected"))
.catch((e) => console.log(e.toString()));


// Application storage folder
app.use(express.static('storage'));


app.use('/v1', router);



// *** Run Applications ***
app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`);
})

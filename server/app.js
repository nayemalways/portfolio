import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import path from "path";
import router from './src/routes/api.js'

import {
  DATABASE_URL, 
  USER_NAME, 
  PASSWORD, 
  PORT, 
  URL_ENCODE, 
  MAX_JSON_SIZE,
  MAX_REQUEST_TIME, 
  MAX_REQUEST_NUMBER, 
  WEB_CACHE
} from  './src/config/config.js';

// Express App
const app = express();
const _dirname = path.resolve();

// Cors config:
// Global Applications Middleware
// For local url will be: http://localhost:5173
// For Render url will be: https://nayem-ahmed.onrender.com
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
app.use(express.static('public', {
  maxAge: '20d',  // Cache for 20 day
  etag: true,    // Enable ETag
  lastModified: true
}));



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



// Content CSP added
app.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "img-src 'self' data: https://res.cloudinary.com https://roar.media;"
    );
    next();
  });

  


// Application Route
app.use('/v1', router);



app.use(express.static(path.join(_dirname, "/client/dist")));
app.get("*", (_, res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
})



// *** Run Applications ***
app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`);
})

import dotenv from "dotenv";
dotenv.config();



export const DATABASE_URL = process.env.DATABASE_URL;
export const USER_NAME = process.env.USER_NAME;
export const PASSWORD = process.env.PASSWORD;
export const PORT = process.env.PORT;
export const JWT_TOKEN = process.env.JWT_TOKEN ;
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION;
export const URL_ENCODE = process.env.URL_ENCODE;
export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE;
export const MAX_REQUEST_TIME = parseFloat(process.env.MAX_REQUEST_TIME);
export const MAX_REQUEST_NUMBER = parseFloat(process.env.MAX_REQUEST_NUMBER);
export const WEB_CACHE = false;




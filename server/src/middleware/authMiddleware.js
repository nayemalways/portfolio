import { DecodeToken } from "../helper/token.js";

export const userAuthentication = (req, res, next) => {
    try {
        const token = req.headers['token'];
        const decoded = DecodeToken(token);
        if(decoded === null) {
            return res.status(400).json({staus: "fail", message: "User unauthorized"});
        }

        const email = decoded.email;
        const user_id = decoded.User_id;

        req.headers.email = email;
        req.headers.user_id = user_id;

        next();

    }catch(e) {
        console.log(e.toString());
        return {status: 'error', message: "Internal server error"}
    }
}

import { EncodeToken } from "../helper/token.js";
import UserModel from "../models/userModel.js";


export const LoginService = async (req) => {
    try {
        const {email, password} = req.body;
        const matchQuery = {email};
        const user = await UserModel.aggregate([
            {$match: matchQuery}
        ]);


        // Matching password
        const passwordMatched = password === user[0].password;
        if(!passwordMatched) {
            return {status: "fail", message: "Incorret password"}
        }

        const token = EncodeToken(user[0]['email', user[0]['_id']]);
        return {status: 'success', message: "Login success", Token: token};


    }catch(e) {
        console.log(e.toString());
        res.status(4000).json({status: 'error', message: 'Internal server error'});
    }
}
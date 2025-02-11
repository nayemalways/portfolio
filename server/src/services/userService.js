import UserModel from "../models/userModel.js";


export const LoginService = async (req) => {
    try {
        const {email, password} = req.body;
        const matchQuery = {email};
        const user = await UserModel.aggregate([
            {$match: matchQuery}
        ]);

        // console.log(user);
        return {status: 'success', data: user};
    }catch(e) {
        console.log(e.toString());
        res.status(4000).json({status: 'error', message: 'Internal server error'});
    }
}
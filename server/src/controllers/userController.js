import { LoginService } from "../services/userService.js";


export const Login = async (req, res) => {
    const result = await LoginService(req);
    res.json(result);
}
import axios from "axios";
import Cookies from 'js-cookie';



export const ApiRequest = async (method, EndPoint, postBody) => {
    try {
        const basUrl = `http://localhost:3000/v1`;
        const token = Cookies.get('token');
        const config = {
            method: method,
            url: `${basUrl}${EndPoint}`,
            headers: {
                "Content-Type": "application/json",
                "token": token
            },
            withCredentials: true
        }

        // If request not GET and DELETE the postBody will included as data in config
        if(method !== "GET" && method !== "DELETE" && postBody) {
            config.data = postBody
        }


        // Requested to server
        const response = await axios(config);
        return response.data;


    }catch(e) {
        // Error handling
        console.log(e.toString());
        toast.error(`Something went wrong`);
        return false;
    }
}
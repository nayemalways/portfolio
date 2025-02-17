import axios from "axios";



export const ApiRequest = async (method, EndPoint, postBody) => {
    try {
        const basUrl = `http://localhost:3000/v1`;
        const config = {
            method: method,
            url: `${basUrl}${EndPoint}`,
            headers: {
                "Content-Type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwiVXNlcl9pZCI6IjY3YWI0NTRiZTc2ZTE4Njg1M2VkN2ZkYiIsImlhdCI6MTczOTcyMzI1OCwiZXhwIjoxNzQyMzE1MjU4fQ.vronbtjXTVzTq_US7QiX_bQ2CcRNAK0PHcvWIxFTHbw"
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
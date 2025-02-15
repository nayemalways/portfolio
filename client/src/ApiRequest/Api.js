import axios from 'axios';




 const RequestAPI = async (Method, Endpoint, Reqbody) => {


    

    try {
        const URL = `http://localhost:6000/v1`;

        // Request configuration including method, headers, and body (if applicable)
        const config = {
            method: Method,
            url: `${URL}${Endpoint}`,
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,  // Include credentials for cross-origin requests
        };

        // Add body only if it's not a GET or DELETE request and body is provided
        if (Method !== "GET" && Method !== 'DELETE' && Reqbody) {
            config.data = Reqbody;  // Axios uses 'data' instead of 'body' for the request body
        }


        // Perform the axios request with the necessary configuration
        const response = await axios(config);
        return response.data;

        
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}



export default RequestAPI;
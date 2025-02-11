import ServiceModel from "../models/serviceModel.js";



// Service create
export const serviceCreate = async (req) => {
    try {

        // Get client data
        const reqBody = req.body;
        // Create service data 
        const data = await ServiceModel.create(reqBody);
        // Finally return status
        return {status: "success", message: "Service created success"};

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error!"};
    }
}


// Service read
export const serviceRead = async (req) => {
    try {
        // Read all service data
        const data = await ServiceModel.find();
        // Finally return status
        return {status: "success", data: data};

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error!"};
    }
}

// Service update
export const serviceUpdate = async (req) => {
    try {
        // Get service id from url param
        const serviceId = req.params['serviceId'];
        // Get client data
        const reqBody = req.body;
        // Update service in Database
        const data = await ServiceModel.updateOne({_id: serviceId}, reqBody);

        // Check service not updated
        if(data.modifiedCount === 0) {
            return {status:"fail", message: "Service updated fail!"}
        }

        // Finally return status
        return {status: "success", message: "Service updated success!"};
        
    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error!"};
    }
}


// Service delete
export const serviceDelete = async (req) => {
    try {

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error!"};
    }
}


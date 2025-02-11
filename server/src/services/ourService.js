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
    }
}

// Service update
export const serviceUpdate = async (req) => {
    try {

    }catch(e) {
        console.log(e.toString());
    }
}


// Service delete
export const serviceDelete = async (req) => {
    try {

    }catch(e) {
        console.log(e.toString());
    }
}


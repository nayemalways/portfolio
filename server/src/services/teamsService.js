import TeamsModel from "../models/TeamModel.js";



// Create Member
export const createMemberService = async (req) => {
    try {
        const reqBody = req.body;
        const data = await TeamsModel.create(reqBody);
        return {status: "success", data: data};
    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}


// Read all member
export const readMemberService = async () => {
    try {

        const data = await TeamsModel.find();
        return {status: "success", data: data};

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}


// Update single member
export const updateMemberService = async (req) => {
    try {

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}


// Delete single member
export const deleteMemberService = async (req) => {
    try {

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}


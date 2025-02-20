import TeamsModel from "../models/TeamModel.js";



// Create Member
export const createMemberService = async (req) => {
    try {
        const reqBody = req.body;
        await TeamsModel.create(reqBody);
        return {status: "success", message: 'Member added successfully'};
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

// Read singel member by id
export const readMemberByIDService = async (req) => {
    try {

        const memberId = req.params['memberId'];
        const data = await TeamsModel.findOne({_id: memberId});
        return {status: "success", data: data};

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"};
    }
}


// Update single member
export const updateMemberService = async (req) => {
    try {
        // Get member id from url parmas
        const memberId = req.params['memberId'];
        // Get data from client
        const reqBody = req.body;
        // Update Team member by specifik id
        const data = await TeamsModel.updateOne({_id: memberId}, reqBody);
        // Check if not updated
        if(data.modifiedCount === 0) {
            return {status: "fail",  message: "Update failed"}
        }

        // Finnaly returns status
        return {status: "success", message: "Update success!"}

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}


// Delete single member
export const deleteMemberService = async (req) => {
    try {
        // Get member id from url parmas
        const memberId = req.params['memberId'];
        // Delee single Team member by memeer id
        const data = await TeamsModel.deleteOne({_id: memberId});
        // Check if not deleted
        if(data.deletedCount === 0) {
            return {status: "fail",  message: "Delete failed"}
        }

        // Finnaly returns status
        return {status: 'success', message: "Members delete success!"}
    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}


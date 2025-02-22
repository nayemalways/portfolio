import { createMemberService, deleteMemberService, readMemberService, updateMemberService, readMemberByIDService } from "../services/teamsService.js"



// Create member controller
export const createMember = async (req, res) => {
    const result = await createMemberService(req);
    res.json(result);
}


// Read member controller
export const readMember = async (req, res) => {
    const result = await readMemberService();
    res.json(result);
}


// Read singel member by id
export const readMemberByID = async (req, res) => {
    const result = await readMemberByIDService(req);
    res.json(result);
}


// Update member controller
export const updateMember = async (req, res) => {
    const result = await updateMemberService(req);
    res.json(result);
}

// Delete member controller
export const deleteMember = async (req, res) => {
    const result = await deleteMemberService(req);
    res.json({result});
}


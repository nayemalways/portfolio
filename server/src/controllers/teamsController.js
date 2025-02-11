import { createMemberService, deleteMemberService, readMemberService, updateMemberService } from "../services/teamsService.js"



export const createMember = async (req, res) => {
    const result = await createMemberService(req);
    res.json({result});
}

export const readMember = async (req, res) => {
    const result = await readMemberService();
    res.json({result});
}

export const updateMember = async (req, res) => {
    const result = await updateMemberService(req);
    res.json({result});
}

export const deleteMember = async (req, res) => {
    const result = await deleteMemberService(req);
    res.json({result});
}


import { serviceCreate, serviceDelete, serviceRead, serviceUpdate } from "../services/ourService.js";


// Service create controller
export const createService = async (req, res) => {
    const result = await serviceCreate(req);
    res.json(result);
}

// Service read controller
export const readService = async (req, res) => {
    const result = await serviceRead(req);
    res.json(result);
}

// Service update controller
export const updateService = async (req, res) => {
    const result = await serviceUpdate(req);
    res.json(result);
}

// Service delete controller
export const deleteService = async (req, res) => {
    const result = await serviceDelete(req);
    res.json(result);
}


import { createBlogService, deleteBlogService, readBlogService, updateBlogService, blogDetailsService } from "../services/blogService.js"



// Create Blog controller
export const createBlog = async (req, res) => {
    const result = await createBlogService(req);
    res.json(result)
}

// Read Blog controller
export const readBlog = async (req, res) => {
    const result = await readBlogService();
    res.json(result)
}


export const blogDetails = async (req, res) => {
    const result = await blogDetailsService(req);
    res.json(result);
}

// Update Blog controller
export const updateBlog = async (req, res) => {
    const result = await updateBlogService(req);
    res.json(result)
}


// Delete Blog controller
export const deleteBlog = async (req, res) => {
    const result = await deleteBlogService(req);
    res.json(result)
}
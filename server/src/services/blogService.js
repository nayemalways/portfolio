
import BlogModel from './../models/blogModel.js';



// Create Blog
export const createBlogService = async (req) => {
    try {
        const reqBody = req.body;
        await BlogModel.create(reqBody);

        return {status: "success", message: "Blog posted success!"}

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}


// Read Blog
export const readBlogService = async () => {
    try {
        const data = await BlogModel.find();
        return {status: 'success', data: data};
    }catch(e) {
        console.log(e.toString());
        return {status: "error",  message: "Internal server error"}
    }
}


// Update Blog
export const updateBlogService = async (req) => {
    try {
        const blogId = req.params['blogId'];
        const reqBody = req.body;

        // Update blog DB operation
        const data = await BlogModel.updateOne({_id: blogId} ,reqBody);
        // Check if not updated
        if(data.modifiedCount === 0) {
            return {status: "fail",  message: "Update failed"}
        }

        // Finnaly return data
        return {status: "succes",  message: "Blog updated success!"}

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}



// Delete Blog
export const deleteBlogService = async (req) => {
    try {

    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error"}
    }
}



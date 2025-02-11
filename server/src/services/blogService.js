
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
export const readBlogService = async (req) => {
    try {

    }catch(e) {
        console.log(e.toString());
        return {status: "error",  message: "Internal server error"}
    }
}


// Update Blog
export const updateBlogService = async (req) => {
    try {

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



import axios from "axios";



// Cloudinary set up
export const cloudinaryImageUpload = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append('upload_preset', 'Images_preset');

    try {

        let cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const response = await axios.post(api, data);
        const { secure_url } = response.data;
        return secure_url;

    }catch(e) {
        console.error(e);
    }
}

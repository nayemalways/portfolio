import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


export function getBase64 (file, callback) {

    const reader = new FileReader();

    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(file);
}



// Cloudinary set up
export const cloudinaryImageUpload = async (file) => {
    const data = new FormData();
    data.append(file, 'image');
    data.append('upload_preset', 'Images_preset');

    try {

        let cloudName = process.env.cloudinaryName;
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

        const response = await axios.post(api, data);
        const { secure_url } = response.data;
        console.log(secure_url);
        return secure_url;

    }catch(e) {
        console.error(e);
    }
}

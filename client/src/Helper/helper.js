import axios from "axios";
import Swal from 'sweetalert2'


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


// Sweet Alert Delete confirm 
export const DeleteAlert = async () => {
   return  Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

          return true;
          
        }
      });

       
}


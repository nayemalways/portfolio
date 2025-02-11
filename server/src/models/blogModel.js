import mongoose from "mongoose";


const DataSchema = mongoose.Schema(
    {
        title: {type: String, required: true, minlength: 5},
        description: {type: String, require: true, minlength: 5},
        image: {type: String, require: true},
    },

    {
        timestamps: true,
        versionKey: false
    }
)


const BlogModel = mongoose.model('blogs', DataSchema);



export default BlogModel;
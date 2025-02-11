import mongoose, { version } from "mongoose";


const DataSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, require: true},
        image: {type: String, require: true},
    },

    {
        timestamps: true,
        versionKey: false
    }
)


const BlogModel = mongoose.model('blogs', DataSchema);



export default BlogModel;
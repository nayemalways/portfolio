import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
    {
        email: {type: String, lowercase: true, unique: true, required: true},
        password: {type: String, required: true}
    },

    {
        timestamps: true,
        versinKey: false
    }
)

const UserModel = mongoose.model('users', DataSchema);

export default UserModel;
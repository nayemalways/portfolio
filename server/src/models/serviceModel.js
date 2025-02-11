import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, require: true},
    image: {type: String, require: true}
},

{
    timestamps: true,
    versionKey: false
}
)

const ServiceModel = mongoose.model('services', DataSchema);

export default ServiceModel;
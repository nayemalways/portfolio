import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    name: {type: String, required: true},
    position: {type: "String", required: true},
    experience: {type: "String", required: true},
    image: {type: "String", required: true},
})

const TeamsModel = mongoose.model('teams', DataSchema);


export default TeamsModel;
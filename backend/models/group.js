const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const Schema = mongoose.Schema;

let GroupSchema = new Schema({
 
    createdBy: {
        type: ObjectId
    },
    title: {
        type: String
    },
    members: {
        type: Array
    },
    groupTask: {
        type: Array
    },
    photoUrl: {
        type: String,
    }
});

mongoose.model("Group", GroupSchema)
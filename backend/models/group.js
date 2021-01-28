const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const Schema = mongoose.Schema;

let GroupSchema = new Schema({
    id: {
        type: ObjectId
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    username: {
        type: String
    }
});

mongoose.model("Group", GroupSchema)
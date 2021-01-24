const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  user_id: {
    type: Number
  },
  id: {
    type: Number
  },
  task: {
      type: String,
      isRequired: true,
  },
  completed: {
    type: Boolean
  }
});

mongoose.model("Todo", todoSchema);
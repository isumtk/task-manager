const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide the task name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 character"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);

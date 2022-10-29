const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide the task name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 character"],
  },
  completed: { type: Boolean, default: false },
  priority: { type: Number, default: 0, min: 0, max: 5 },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  completedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Task", taskSchema);

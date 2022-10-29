const express = require("express");
const router = express.Router();

const {
  getAllUnfinishedTasks,
  getAllFinishedTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/").get(getAllUnfinishedTasks).post(createTask);
router.route("/finished").get(getAllFinishedTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

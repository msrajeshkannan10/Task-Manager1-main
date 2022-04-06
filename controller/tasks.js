const Task = require("../models/schema");

//To get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json({ status: "success", data: { tasks } });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//To post task
const createOne = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({ task });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//To update a task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.json({ message: `No task with this id ${taskID}` });
    res.send("Updated Successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};
//To get single task
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) return res.json({ message: `No task with this id ${taskID}` });
    res.json({ task });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//To delete a task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) return res.json({ message: `No task with this id ${taskID}` });
    res.send("Deleted Successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = {
  getAllTasks,
  createOne,
  updateTask,
  getTask,
  deleteTask,
};

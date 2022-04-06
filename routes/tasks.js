const express = require("express")
const { getAllTasks, createOne, updateTask, getTask, deleteTask } = require("../controller/tasks")
const router = express.Router()

router.route('/').get(getAllTasks).post(createOne)

router.route('/:id').patch(updateTask).get(getTask).delete(deleteTask)

module.exports = router

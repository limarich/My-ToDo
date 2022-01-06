const express = require('express')
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/', TaskController.showTasks)
router.get('/view/:id', TaskController.showTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/update', TaskController.updateTaskPost)
router.post('/updateStatus', TaskController.updateToggleTaskStatus)
router.post('/remove', TaskController.removeTask)

module.exports = router

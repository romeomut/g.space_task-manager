import express from 'express';
import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

router.get('/task/all', checkAdmin, taskController.getAllTasks);
router.post('/task', taskController.createTask);
router.get('/task', taskController.getTasksByUserId);
router.get('/task/:id', taskController.getTask);
router.put('/task/:id', taskController.updateTask);
router.delete('/task/:id', taskController.deleteTask);

//all tasks for test
router.get('/tasks', taskController.getTasks);

export default router;

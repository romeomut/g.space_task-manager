import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
    try {
        const { description } = req.body;
        const userId = req.user._id;

        const taskObj = {
            description,
            createBy: userId,
        };

        const task = await Task.create(taskObj);

        return res.status(201).json(task);
    } catch (error) {
        return res.status(400).json({ message: 'Failed to create the task!' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findOneAndUpdate(
            {
                _id: taskId,
                createBy: userId,
            },
            req.body,
            { new: true, runValidator: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found!' });
        }

        return res.status(201).json(task);
    } catch (error) {
        return res.status(400).json({ message: 'Failed to update the task!' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findOneAndDelete({
            _id: taskId,
            createBy: userId,
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found!' });
        }

        return res.status(200).json({ message: 'Tak delete successfully' });
    } catch (error) {
        return res.status(400).json({ message: 'Failed to delete the task!' });
    }
};

export const getTasksByUserId = async (req, res) => {
    try {
        const userId = req.user._id;

        const tasks = await Task.find({
            createBy: userId,
        });

        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(400).json({ message: 'Failed to get the task!' });
    }
};

export const getTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findOne({
            _id: taskId,
            createBy: userId,
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found!' });
        }

        return res.status(200).json(task);
    } catch (error) {
        return res.status(400).json({ message: 'Failed to get the task!' });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});

        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(400).json({ message: 'Failed to hind the task!' });
    }
};

//all tasks for test
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});

        if (!tasks) {
            return res.status(404).json({ message: 'Tasks not found!' });
        }

        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(400).json({ message: 'Failed to get the tasks!' });
    }
};

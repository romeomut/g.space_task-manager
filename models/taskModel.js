//const mongoose = require('mongoose')
import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Task = mongoose.model('Task', taskSchema);

// module.exports = {
//     Task,
// }

export default Task;

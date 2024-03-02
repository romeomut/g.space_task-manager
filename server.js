// const express = require('express')
// const bodyPasrer = require('body-parser')
import express from 'express';
import bodyPasrer from 'body-parser';

//

import './config/db.js';

//

import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

//

const app = express();

//

const port = 3000;

//middleware
app.use(bodyPasrer.json());

//

app.get('/', (req, res) => {
    res.send('Good');
});

//

app.get('/api/auth/register', (req, res) => {
    res.send('Express');
});

//

app.use('/api', authRouter);
app.use('/api', taskRouter);

//

app.listen(port, () => {
    console.log(
        `Server listening on post ${port} and starting at http://localhost:${port}`
    );
});

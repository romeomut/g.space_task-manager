//const mongoose = require('mongoose')
import mongoose from 'mongoose'
import  {DB_LOGIN, DB_PASSWORD}  from './secret.js'

const URI = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.h6vowu4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(URI).then(()=>{
    console.log('Connected to MongoDB');
}).catch((e)=>{
    console.error(e);
})
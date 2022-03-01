const express= require('express');
const app= express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors=require('cors');

app.use(cors());
dotenv.config();


//import Routes
const todolist = require('./routes/todo');

//Connected to DB
mongoose.connect(process.env.DB_CONNECT,()=>console.log('Connected to DB'));


//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/todos', todolist);

const PORT = process.env.PORT || 5000

app.listen(PORT,()=> console.log(`Connection is established and running on port: ${PORT}`));
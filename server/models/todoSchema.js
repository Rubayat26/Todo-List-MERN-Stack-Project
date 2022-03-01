const mongoose = require('mongoose');

const todoSchema= new mongoose.Schema({
    //creating schema for todo
    task_name:{
        type:String, 
        required:true
    }
   

});





module.exports=mongoose.model('Todo',todoSchema);

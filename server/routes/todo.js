const express = require('express');
const mongoose  = require('mongoose');
const Todo = require('../models/todoSchema');

const router = express.Router();


router.get('/',async (req,res)=>{
    try {
        const todos = await Todo.find({})
        res.json(todos)
    } catch (error) {
        res.json({message:error})
        
    }
});

router.post('/',async (req,res)=>{
    const todo = new Todo({
      task_name: req.body.task_name
       
    });

    try{
        const savedTodo= await todo.save();
        res.json(todo);
    }catch(err){
        res.json({message:err})
    }

});


router.delete('/:id', async(req,res)=>{
    // try{
    //     const removedTask= await Todo.deleteOne({_id:req.params.Id})
    //     res.json(removedTask);
    // }catch(err){
    //     res.json({message:err})
    // }
    const id= req.params.id;
    try {
        await (Todo.findByIdAndRemove(id).exec())
        res.send('Successfully Deleted')
    } catch (error) {
        console.log(error);
    }
});

 

module.exports= router;
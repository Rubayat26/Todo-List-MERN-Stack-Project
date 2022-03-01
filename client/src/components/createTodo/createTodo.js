import React from 'react';
import { useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function CreateTodo() {
    
    const[todo,setTodo]= useState({
        task_name:""
    });

    const createTodo =()=>{
        axios.post('http://localhost:5000/todos',todo).then(()=>{
          window.location.reload(false);  // reload the page at current URL
        });
    }

    return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Add Todo" variant="outlined" value={todo.task_name} onChange={(event)=>{setTodo({...todo, task_name: event.target.value})}} />
      

      <Button variant='contained' onClick={createTodo}>Add Todo</Button>
    </Box>
    </>  
    
  );
}
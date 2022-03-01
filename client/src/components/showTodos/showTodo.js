import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ShowTodos() {
    const [todos,setTodos]= useState([]);
    

    const deleteTask = (id)=> {
        axios.delete(`http://localhost:5000/todos/${id}`).then(()=>{
          window.location.reload(false);
        })
  
      }

    useEffect(()=>{
        axios.get('http://localhost:5000/todos').then((allTodos)=>{
            setTodos(allTodos.data);
        });
       
    }, [])

    // // const todoList= todos.map((todo,key)=>
    // // <li key={todo._id}>{todo.task_name}</li>

    // )

    return (
        <>
        <h2>TodoList </h2>
        <TableContainer component={Paper}>
         <Table aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell>Todos</TableCell>

             </TableRow>
           </TableHead>
           <TableBody>
             {todos.map((todo,key) => (
               <TableRow key={todo._id}>
                 <TableCell component="th" scope="row">
                   {todo.task_name}
                 </TableCell>
                 
                 <TableCell align="right">
                <IconButton aria-label="delete"  color="primary" onClick={()=>{deleteTask(todo._id)}}>
                  <DeleteIcon />
                 </IconButton>
                 </TableCell>
                 
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
       </> 
       
     );

}
import React,{useState} from 'react'
import {ToDoForm}  from '../components/ToDoForm'


export  function ToDoList() {
    const [toDos , setTodos] = useState([]);

    const addToDo = ToDo =>{
        if (!toDo.text || /^\s*$/.test(toDo.text)) { 
            return 
        }
    }
    
  return (
    <>
      <h1>What's your plan for today?</h1>
      <ToDoForm/>
    </>
  )
  }

 
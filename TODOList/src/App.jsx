import { useState } from 'react'

import './App.css'

function App() {
  const [todo,setTodo] =useState("");
  const [addtodo,setAddtodo] =useState([])

  const handleAdd =()=>{
    setAddtodo([...addtodo,todo]);
    setTodo("")
  }

  const handleDelete =()=>{
    addtodo("")
  }
  
  return (
    <>
     <div style={{textAlign:"center",backgroundColor:"lightblue", borderRadius:"5px",width:"300px",marginLeft:"500px",marginTop:"100px"}}>
      <h1>To-do List</h1>
      <p>Add To Do</p>
      <input type="text" placeholder='Enter a Task' name="todo" value={todo} onChange={(e)=>setTodo(e.target.value)} id=""  style={{padding:"9px",borderRadius:"3px",border:"1px solid white",margin:"9px"}}/>
      <button onClick={handleAdd} style={{padding:"9px",backgroundColor:"blue",color:"white",border:"1px solid black", borderRadius:"4px"}}>Add</button>
      <h2 >To do List</h2>
      {addtodo.map((item,index)=>(
        <ul >
          <li key={index} style={{textAlign:"left"}}>{item}
           
          </li>
        </ul> 
      ))}
     </div>
     
      
     
    </>
  )
}

export default App

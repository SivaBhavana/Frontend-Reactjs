import React, { useState } from 'react'
import { Login } from './Login';

const Logout = ({name}) => {
    const [logout,setLogout] =useState(false);

    const handleClick=()=>{
        setLogout(true)
        
    }
      if(logout){
           return <Login/>
        }
  return (
    <>
    <div>
        <h1 style={{color:"blue"}}>Welcome Back {name}!</h1>
        <button onClick={handleClick} style={{color:"white",backgroundColor:"red",border:"1px solid red",padding:"7px",borderRadius:"3px"}}>Logout</button>
    </div>
    <div style={{backgroundColor:"lightgray",borderRadius:"5px",textAlign:"left"}}>
        <h2>🎯Your Dashboard</h2>
        <p> Profile Information </p>
        <ul>
          <li>Name:{name}</li>
            <li>Email:{name}@gmail.com</li>
            <li>Memeber since:2022</li>
        </ul>

    </div>
    <div style={{backgroundColor:"lightgray",borderLeft:"4px solid green",padding:"15px",borderRadius:"5px"}}>
       <ul style={{listStyle:"none",borderRadius:"5px",display:"flex",gap:"5px",justifyContent:"space-between"}}>
        <li style={{backgroundColor:"white",padding:"5px",margin:"5px"}}>Task Completed : 24</li>
        <li style={{backgroundColor:"white",padding:"5px",margin:"5px"}}>Projects :5</li>
        <li style={{backgroundColor:"white",padding:"5px",margin:"5px"}}>Points : 50</li>
       </ul>
    </div>
    <p style={{backgroundColor:"orange",padding:"5px",borderRadius:"3px"}}>🚫This content is visible to authenticated users only!!</p>

    </>
  )
}

export default Logout
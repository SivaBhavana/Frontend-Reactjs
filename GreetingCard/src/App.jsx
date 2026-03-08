import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [name,setName]=useState("")
  const [greet,setGreet] =useState("");
  const message={
    Birthday:"Happy Birthday😍",
    Anniversary:"Happy Anniversary❤️",
    Congrats:"Hearty Congratulations🎉"
  }

  return (
    <>
   
      <div>Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> </div>
      <div style={{padding:"10px"}}>Greeting Type: <select value={greet} onChange={(e)=>setGreet(e.target.value)}>
       <option value="">Select</option>
       <option value="Birthday">Birthday</option> 
       <option value="Anniversary">Anniversary</option>
       <option value="Congrats">Congrats</option></select> </div>
    
    
    {
      name.trim() && greet && (
        <div className='card'>
          <h1>{message[greet]}</h1>
          <h2>{name}</h2>
        </div>
      )
    }
    </>
  )
}

export default App

// Show a Profile Preview card only when:

// Email is filled (not just spaces)
// Password length is ≥ 6
// “I agree” checkbox is checked


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/gurramsivabhavana888/Reactjs.git
// git push -u origin main
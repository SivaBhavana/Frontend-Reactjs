import React, { useState } from 'react'
import Dark from './Dark';

const Light = () => {
    const [theme,setTheme] =useState("light");
    const handleClick =()=>{
        setTheme("dark")
    }

     if(theme == "dark"){
            return <Dark/>
         }
  return (
    <>
       <h1>Day Mode</h1>
       <button onClick={handleClick} style={{backgroundColor:"orange",padding:"5px",borderRadius:"5px",border:"1px solid orange"}}>Switch to Night</button>
       <div style={{boxShadow:"4px 4px 4px 4px rgba(0, 0, 0, 0.2)", padding:"10px",margin:"16px",borderRadius:"5px"}}>
        <h2>Theme Aware Card</h2>
        <p>This card reacts to the current theme</p>
       </div>
    </>
  )
}

export default Light
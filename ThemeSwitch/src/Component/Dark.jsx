import React, { useState } from 'react'
import Light from './Light';

const Dark = () => {
    const [theme,setTheme]=useState("dark");
    const handleClick=()=>{
        setTheme("light")
    }
    if(theme == "light"){
        return <Light/>
    }
  return (
    <div style={{backgroundColor:"black", color:"white", minHeight:"100vh", padding:"10px"}}>
        <h1>Night Mode</h1>
       <button onClick={handleClick} style={{backgroundColor:"gray",padding:"5px",borderRadius:"5px",border:"1px solid gray",color:"white"}}>Switch to Day</button>
       <div style={{boxShadow:"4px 4px 4px 4px rgba(246, 251, 252, 0.2)", padding:"10px",margin:"16px",borderRadius:"5px"}}>
        <h2>Theme Aware Card</h2>
        <p>This card reacts to the current theme</p>
       </div>
    </div>
  )
}

export default Dark
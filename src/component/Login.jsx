import React, { useState } from 'react'
import Logout from './Logout';

export const Login= ()=>{
  const [name,setName] =useState("");
  const [password,setPassword]=useState("");
  const [login,setLogin] =useState(false);

  const handelClick=()=>{
    if( name == ""  || password == ""){
        alert("Please Enter Username and Password to Login")
        return;
  }
  setLogin(true);
  }

  if(login){
    return <Logout name={name}/>
  }


    return(
        <>
        <div style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
             <h1 style={{textAlign:"center",color:"blue"}}>Welcome To our App</h1>
     <p style={{marginTop:"1px"}}>Please Login To Continue</p>
            Username:<input type="text" name="name" id="" value={name} onChange={(e)=>setName(e.target.value)}style={{padding:"5px",margin:"5px",borderRadius:"5px",border:"1px solid black"}}></input>
            Password:<input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{padding:"5px",margin:"5px",borderRadius:"5px",border:"1px solid black"}} />
            <button onClick={handelClick} style={{padding:"8px",margin:"5px",color:"white",backgroundColor:"blue",border:"none",borderRadius:"5px"}}>Login</button>
        </div>

        <div style={{borderLeft:"4px solid blue",borderRadius:"5px",textAlign:"left"}}>
            <h4>📢Public Announcements</h4>
            <ul>
                <li>New updates coming soon</li>
                <li>Stay tuned to our website</li>
                <li>We are thrilled to add new features</li>
            </ul>
        </div>
        </>
    )
}
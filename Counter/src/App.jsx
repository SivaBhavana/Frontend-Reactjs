import { useState } from 'react'

import './App.css'

function App() {
  
  const [count,setCount]=useState(0);
  const handleClick =()=>{
    if(count == 0) {
      alert("cant go beyond zero");
      return 
    }
    setCount(count -1);
  }
  return (
    <>
    <div style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"white",height:"200px", width:"300px",margin:"200px 500px", borderRadius:"5px"}}>
      <div style={{marginBottom:"10px"}} ><h1>Count : {count}</h1></div>
      <div style={{}}>
        <button onClick={()=>setCount(count+1)} style={{backgroundColor:"green",border:"1px solid white",color:"white",borderRadius:"5px",padding:"10px",margin:"5px"}}>Increment</button>
        <button onClick={handleClick} style={{backgroundColor:"red",border:"1px solid white",color:"white",borderRadius:"5px",padding:"10px",margin:"5px"}}>Decrement</button>
        <button onClick={()=>setCount(0)} style={{backgroundColor:"yellow",border:"1px solid white",color:"white",borderRadius:"5px",padding:"10px",margin:"5px"}}>Reset</button>
      </div>
      </div>
    </>
  )
}

export default App

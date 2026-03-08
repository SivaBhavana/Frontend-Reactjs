import React,{useState} from 'react'

const GreetCard = () => {
    const [name,setName]=useState("")
   const [card,setCard]=useState("")
    const tt={
        birthday:"Happy Birthday",
        congrats:"Hearty COngratulations",
        Anniversary:"Happy Anniversary"
    }
  return (
    <>
     <div>
        <label>Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></label>
     
       </div>
    <div>
      <label>Choose Card : </label>
        <select value={card} onChange={(e)=>setCard(e.target.value)}>
          <option value="">Select</option>
          <option value="birthday">Birthday</option>
          <option value="congrats">Congrats</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
          
        {name && card && (
            <div style={{backgroundColor:"pink", textAlign:"center"}}>
                <h1>{tt[card]}</h1>
                <h2>{name}</h2>
            </div>
        )}  
               
          
    </>
  )
}

export default GreetCard
import { useState } from 'react'
import image from './assets/image.png'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'

import './App.css'
import Card from './Card'

function App() {
   const [email,setEmail] =useState("");
   const [password,setPassword]=useState("");
   const [agree,setAgree]=useState(false)

   const products=[
    {id:1,image:image,name:"Ceramic Vase",price:400},
    {id:2,image:im1,name:"Glass Vase",price:600},
    {id:3,image:im2,name:"Brass Vase",price:800}
   ]
 
  return (
    <>
     <div>
      Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div> 
      <div>
        Password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div>
        <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)}/>I Agree
      </div>
{ email.trim() && password.length >=6  && agree && (
       <div className="card">
        <h1>{email}</h1>
        <h2>{password}</h2>
        <h3>{agree}</h3>
       </div>
)}
      <Card products={products}/>
    </>
  )
}

export default App

// Show a Profile Preview card only when:

// Email is filled (not just spaces)
// Password length is ≥ 6
// “I agree” checkbox is checked
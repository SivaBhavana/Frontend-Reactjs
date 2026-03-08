import { useState } from 'react'
import './App.css'
import Gallery from './Gallery'
import image from './assets/image.png'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
function App() {
 
   const products=[
    {id:1,image:<img src={image} width={150} height={150} style={{borderRadius:"10px"}}/>, name:"Ceramic Vase", price:500},
    {id:2,image:<img src={im1} width={150} height={150} style={{borderRadius:"10px"}}/>,name:"Glass Vase",price:1000},
    {id:3,image:<img src={im2} width={150} height={150} style={{borderRadius:"10px"}}/>, name:"Brass Vase",price:1500}
   ]

  return (
    <>
    <div style={{textAlign:"center"}}>
         <h1>Product Gallery</h1>
         <Gallery products={products}/>
    </div>
     
    </>
  )
}

export default App

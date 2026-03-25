import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [time,setTime] =useState(new Date())

  useEffect(()=>{
     const timer= setInterval(()=>{
      setTime(new Date())
     }, 1000)

     return ()=> clearInterval(timer)
  },[])

  const fromatedDate= time.toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})
  const formatedTime =time.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})

  return (
    <>
      <h1 className='live'>Live Clock</h1>
      <div className='tt'>{formatedTime}</div>
      <p>{fromatedDate}</p>

    </>
  )
}

export default App

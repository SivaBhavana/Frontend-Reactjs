import React, { useState } from 'react'
import ContactForm from './ContactForm';

const SubmitedForm = ({data}) => {
  const [form,setForm] =useState(false);
  const handleSubmit =()=>{
    setForm(true)
  }
  if(form){
    return <ContactForm/>
  }
  return (
    <div>
      <h1 style={{color:"blue"}}>✅FORM SUBMITTED SUCCESSFULLY!</h1>
      <br />
      <p>Thankyou for contacting us!</p>
      <p>We will get back to you soon.</p>

      <div className='info'>
        <h2> 🟦 SUBMITTED INFORMATION</h2>
        <hr style={{backgroundColor:"blueviolet"}} />
         <ul>
          <li>Name: {data.name}</li>
          <li>Email: {data.email}</li>
          <li>PhoneNumber: {data.phone}</li>
          <li>Subject: {data.subject}</li>
          <li>Message: {data.message}</li>
         </ul>

      </div>
      <div style={{textAlign:"center"}}>
  <button className="formsub" onClick={handleSubmit}>Submit Another Form</button>
</div>
    </div>
  )
}

export default SubmitedForm
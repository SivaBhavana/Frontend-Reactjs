import React from 'react'

const StudentList = ({students}) => {

  return (
    <div style={{textAlign:"center"}} >
       { students.map((student)=>(
          <ul key={student.id} style={{border:"1px solid black", margin:"5px",padding:"4px", listStyle:"none"}}>
            <li>Id : {student.id}</li>
            <li>Name : {student.name}</li>
            <li>Age :{student.age}</li>
            <li>City : {student.city}</li>
            <li>Skills : {student.skills.join(",")}</li>
           </ul>

       ))
       
       }
    </div>
  )
}

export default StudentList
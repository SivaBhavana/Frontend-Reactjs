import React from 'react'
import Navbar from './Navbar'
import StudentList from './component/StudentList'
import GreetCard from './component/GreetCard'

const App = () => {

  const students=[
    {id:1, name:"Bhavana",age:25, city:"Hyderabad", skills:["Reactjs","Nodejs","express","MongoDB"]},
    {id:"2",name:"Anjali",age:"22", city:"Chennai", skills:["Sap","abap","cloud"]},
    {id:"3",name:"Bharath",age:"18", city:"Narasaraopet",skills:["maths","physics","chemistry"]}
  ]
  return (
    <div>
      {/* <Navbar user={{name:"Bhavana Soon Learn and Build Websites" , age:25}}/> */}
      <GreetCard/>
      <StudentList students={students} />
    </div>
  )
}

export default App

// import ReactDOM from 'react-dom/client'
// import './index.css'

// const books = [
//     {
//         id:1,
//         author : "Peter Thiel",
//         img : "https://images-eu.ssl-images-amazon.com/images/I/61PDzIhVLnL._AC_UL330_SR330,330_.jpg",
//         title : "Zero to One"
//     },
//     {
//         id:2,
//         author : "Eric",
//         img : "https://images-eu.ssl-images-amazon.com/images/I/816QPeoHWEL._AC_UL330_SR330,330_.jpg",
//         title : "Almanack Of Naval Ravikant"
//     },
//     {
//         id:3,
//         author : "Daksh",
//         img : "https://images-eu.ssl-images-amazon.com/images/I/81KeOD++BBL._AC_UL330_SR330,330_.jpg",
//         title : "A Nation of Idiots"
//     },
// ]

// const BookList = ()=>{
//     return(
//         <section className="bookList">
//             {books.map((book)=>{
//                 return(
//                     <Book book={book} key={book.id} />
//                 )
//             })}
//         </section>
//     )
// }


// const Book = (props)=>{
//     const {img, title, author} = props.book;

//     return(
//         <article className="book">
//             <img src={img} alt="" />
//             <h1>{title}</h1>
//             <h4>{author}</h4>
//         </article>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>)
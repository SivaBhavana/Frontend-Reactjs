import React from 'react'

const Navbar = ({user}) => {
  return (
    <div>{user.name}
    <h2>{user.age}</h2></div>
  )
}

export default Navbar
import React from 'react'

const Card = ({products}) => {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",margin:"5px",padding:"5px"}}>
        {
            products.map((product)=>(
                <div key={product.id} style={{border:"1px solid pink",borderRadius:"5px",margin:"9px",padding:"18px"}}>
                    <img src={product.image} style={{width:"100px" ,height:"100px"}}/>
                    <p>ProductName:{product.name}</p>
                    <p>Price:{product.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Card
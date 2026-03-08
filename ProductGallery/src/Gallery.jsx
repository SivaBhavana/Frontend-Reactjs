import React from 'react'

const Gallery = ({products}) => {
  return (
    <>
    <div className='card'>
       { products.map((product)=>(
            <ul key={product.id} style={{listStyle:"none"}}>
                 <li>{product.image}</li>
                 <li>Product Name: {product.name}</li>
                 <li>Price: {product.price}</li>
            </ul>
       ))
       }
       </div>
      
    </>
    
  )
}

export default Gallery
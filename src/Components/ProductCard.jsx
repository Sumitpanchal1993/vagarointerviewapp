import React from 'react'
import './ProductCard.css'


function ProductCard({item,handleAddToCart}) {
  return (
    <>
    <div className="prdCardBase">
    <div className='itemImage'>
        <img src={item.images[0]} alt="" />
    </div>
    <div className="itemdetail">
        <h3>{item.title}</h3>
        {/* <p>{item.description}</p> */}
        <h4>₹{item.price}</h4>
        <button onClick={()=>{handleAddToCart(item)}}>Add To Cart</button>
    </div>

    </div>

    </>
  )
}

export default ProductCard
import React from 'react'
import ProductCard from './ProductCard'
import './AllProducts.css'

function AllProducts({fetchData , handleAddToCart}) {
  return (
    <>
        <div className="productBase">
            {fetchData.map((item)=>{
            return (<ProductCard key={item.id} item= {item}  handleAddToCart={handleAddToCart}/>)
            })}           
        </div>
    </>
  )
}

export default AllProducts
import React from 'react'
import ProductList from './ProductList'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <>
    <div>
        {ProductList.map((e)=>{
            return(
              <ProductItem  id={e._id} name = {e.name}  img={e.image} />
            )
        })}
    </div>
    </>
  )
}

export default Products
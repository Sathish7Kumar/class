import React from 'react'
import ProductList from './ProductList'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const product = ProductList.find((item)=> item._id === id)

    const backBtn = (e) =>{
        e.preventDefault()
       nav('/products')
    }

    if(!product){
        return (
            <>
            <h2>Products not found</h2>
            <button onClick={backBtn}>Back to Mobile</button>
            </>
        )
    }

   

  return (
    <>
    <div>
        <h2>{product.name}</h2>
        <img src={product.image} height={100} width={100} />
        <p>Specs : {product.desc}</p>
        <h4>Price : {product.price}</h4>
        <button>ADD TO CART</button>
        <br/> <br/>
        <button onClick={backBtn}>Back to Mobile</button>
    </div>
    </>
  )
}

export default ProductDetails
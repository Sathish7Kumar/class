import React, { useCallback, useState } from 'react'
import ProductCall from './ProductCall'

const Callback = () => {
    const [product, setproduct] = useState(["Mobile","Grocery"])
    const [count, setcount] = useState(0)
    const [cart, setcart] = useState(0)

    const addCart = useCallback(() =>{
        setcart(cart+1)
    },[cart])

  return (
    <>
    <div>
        <h1>Count is {count}</h1>
        <button onClick={()=>setcount(count+1)}>Add Count</button>

        <h1>Cart Value is {cart}</h1>
        

        {product.map((e,i)=>{
           return <ProductCall addCart={addCart} name={e} key={i}/>
        })}
    </div>
    </>
  )
}

export default Callback
import React from 'react'

const ProductCall = React.memo(({name,addCart}) => {

    console.log(name + " rendering");

  return (
    <>
    <h1>{name}</h1>
    <button onClick={addCart}>Add Cart</button>
    </>
  )
})

export default ProductCall

// pure component - class or function 

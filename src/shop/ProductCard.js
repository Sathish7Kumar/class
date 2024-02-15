import React from 'react'
import Button from './Button'

const ProductCard = (props) => {
  return (
    <>
    {/* `${}` */}
    <div className='pro-card'>
        <h2>{props.name}</h2>
        <img src={props.img} style={{height:"200px",width:"200px"}} />
        <p>Specs : {props.spec}</p>
        <h4>Price : {props.p}</h4>
        <Button/>
    </div>
    </>
  )
}

export default ProductCard
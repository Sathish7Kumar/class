import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({name,img,id}) => {
    const nav = useNavigate()
  return (
    <>
    <div 
    onClick={()=>{
        nav('/products/' + id)
    }}
    style={{cursor:"pointer"}}>
        <h2>{name}</h2>
        <img src={img} height={100} width="100px" />
    </div>
    </>
  )
}

export default ProductItem

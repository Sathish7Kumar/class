import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({FoodData,cartItems,addCart}) => {
  return (
    <>
    <Link to='/cart'>Cart {cartItems.length}</Link>
    <div>
      {FoodData.map((item,i)=>{
        return(
         <>
          <h1>{item.name}</h1>
          <img src={item.image} />
          <h2>{item.subItemsData.name}</h2>
          <div>
            {item.subItemsData.subItems.map((subItem,i)=>{
              return(
                <>
                <h2>{subItem.name}</h2>
                <img src={subItem.image} />
                <p>{subItem.description}</p>
                <h4>Price : {subItem.price}</h4>
                <button onClick={()=>addCart(subItem)}>Add to cart</button>
                </>
              )
            })}
          </div>
         </>
        )
      })}
    </div>
    </>
  )
}

export default Home
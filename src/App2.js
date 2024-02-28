import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./food/Home";
import Cart from "./food/Cart";
import FoodData from "./food/FoodData";
import "./App.css";
import Payment from "./food/Payment";

const App2 = () => {
  const [cartItems, setcartItems] = useState([]);

  const addCart = (item) => {
    setcartItems((prev) => [...prev, item]);
  };

  const calcTotal = () =>{
    let total = 0
    cartItems.forEach((item)=>{
        total = total + parseInt(item.price)
    })
    return total
  }

  const clearCart = () =>{
    setcartItems([])
  }

  const removeCart= (index) =>{
   setcartItems((prev)=> prev.filter((e,i)=> i !==index))
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addCart={addCart}
                cartItems={cartItems}
                FoodData={FoodData}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                removeCart={removeCart}
                clearCart={clearCart}
                calcTotal={calcTotal}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App2;

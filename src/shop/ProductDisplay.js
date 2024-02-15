import React from "react";
import products from "./ProductItem";
import ProductCard from "./ProductCard";

const ProductDisplay = () => {
  // array
  return (
    <>
      <div className="pro-container">
        {/* {products.map((item , _id) => {
          return(
          <div className="pro-card" key={_id}>
            <h2>{item.name}</h2>
            <img  src={item.image} style={{height:"200px",width:"200px"}}  />
            <p>Spec : {item.desc}</p>
            <h4>Price : {item.price}</h4>
            <button>ADD TO CART</button>
          </div>
          )
        })} */}
        {products.map((item, _id) => {
          return (
            <ProductCard
              key={_id}
              name={item.name}
              img={item.image}
              spec={item.desc}
              p={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductDisplay;

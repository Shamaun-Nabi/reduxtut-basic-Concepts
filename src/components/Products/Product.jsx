import React from "react";

const Product = (props) => {
  const { name, id } = props.product;
  return (
    <div style={{ border: "1px solid green", margin: "5px",padding:"5px" }}>
      <h3>{name}</h3>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;

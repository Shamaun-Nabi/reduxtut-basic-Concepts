import React from "react";
import Product from "../Products/Product";

const Shop = () => {
  const products = [
    {
      name: "Asus Laptop",
      id: 1,
    },
    {
      name: "Dell Laptop",
      id: 2,
    },
    {
      name: "HP Laptop",
      id: 3,
    },
    {
      name: "Toshiba Laptop",
      id: 4,
    },
    {
      name: "Walton Laptop",
      id: 5,
    },
  ];
  return (
    <div>
      <h3>Shop</h3>
      {products.map((pd) => (
        <Product product={pd} />
      ))}
    </div>
  );
};

export default Shop;

import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Show All Products !!</h1>

      <Link to="/">home</Link>
      <br />
      <Link to="/products/1">detail</Link>
      <br />
      <Link to="/products/1?name=saebom&age=9">search detail</Link>
    </div>
  );
};

export default Product;

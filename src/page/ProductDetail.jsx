import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // parameter 값 불러오는 용도
  const [query, setQuery] = useSearchParams(); // query 값 불러오는 용도

  console.log(query.get("name"));
  console.log(query.get("age"));

  return (
    <div>
      <h1>Product Detail {id}</h1>

      <Link to="/products">products</Link>
      <br />
      <Link to="/">home</Link>
    </div>
  );
};

export default ProductDetail;

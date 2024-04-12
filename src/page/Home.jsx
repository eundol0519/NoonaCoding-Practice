import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/about");
  };

  // Link : a 태그 같은 역할, 라우터 간에 이동할 수 있도록 도와준다.
  // useNavigate : 함수 내에서 라우터 간에 이동해야 하는 경우 유용하다.

  return (
    <div>
      <h1>Home</h1>

      <button onClick={goToHomePage}>about</button>
      <br />
      <Link to="/products">product</Link>
    </div>
  );
};

export default Home;

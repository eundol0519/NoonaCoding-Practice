import { useState } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Home from "./page/Home";
import About from "./page/About";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import User from "./page/User";
import Error from "./page/Error";

import "./App.css";

// [첫번째 방법] 👉 BrowserRouter 사용
function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const PrivateRoute = () => {
    if (authenticate) {
      return <User />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Restful URL 패턴 */}
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// [두번째 방법] 👉 createBrowserRouter 사용
// function App() {
//   const [authenticate, setAuthenticate] = useState(false);

//   const PrivateRoute = () => {
//     if (authenticate) {
//       return <User />;
//     } else {
//       return <Navigate to="/login" />;
//     }
//   };

//   const router = createBrowserRouter([
//     { path: "/", element: <Home /> },
//     { path: "/about", element: <About /> },
//     { path: "/products", element: <Product /> },
//     { path: "/products/:id", element: <ProductDetail /> },
//     { path: "/login", element: <Login /> },
//     { path: "/user", element: <PrivateRoute /> },
//     { path: "*", element: <Error /> },
//   ]);

//   return <RouterProvider router={router} />;
// }

export default App;

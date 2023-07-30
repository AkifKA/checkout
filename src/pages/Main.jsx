import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../index.css";

const Main = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <h1 className="text-center mt-5 text-danger">Welcome My Checkout Page</h1>
      <h2 className="text-center mt-3">
        Click{" "}
        <NavLink to="/product-list" className="link-text">
          here
        </NavLink>{" "}
        to see our products.
      </h2>
      <h2 className="text-center mt-3">
        Click <NavLink to="/new-product">here</NavLink> to add a new product.
      </h2>
    </div>
  );
};

export default Main;

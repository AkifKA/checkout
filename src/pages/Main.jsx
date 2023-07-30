import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../index.css";

const Main = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Welcome My Checkout Page</h1>
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

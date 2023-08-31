import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ cantidad }) => {
  return (
    <>
    <Link to={'carro'}>
      <div className="d-flex" role="search">
      <i className="bi bi-cart-fill"></i>({cantidad})
      </div>
      </Link>
    </>
  );
};

export default CartWidget;

import React from "react";

const CartWidget = ({ cantidad }) => {
  return (
    <>
      <div className="d-flex" role="search">
      <i className="bi bi-cart-fill"></i>({cantidad})
      </div>
    </>
  );
};

export default CartWidget;

import React from "react";

const CartWidget = ({ cantidad }) => {
  return (
    <>
      <div className="d-flex" role="search">
        <span className="material-symbols-outlined">shopping_cart</span>({cantidad})
      </div>
    </>
  );
};

export default CartWidget;

import React from "react";
import Item from "./Item";
import CartWidget from "./CartWidget";
const Navbar = ({ nombre }) => {
let numeroCarro = 1;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>{nombre}</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Item nombre="Home" link="asd" active={true}></Item>
              <Item nombre="Cortes" link="asd"></Item>
              <Item nombre="Tinturas" link="asd"></Item>
              <Item nombre="Novias" link="asd"></Item>
              <Item nombre="Eventos" link="asd"></Item>
            </ul>
            <CartWidget cantidad={numeroCarro}></CartWidget>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

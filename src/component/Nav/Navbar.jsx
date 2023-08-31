import React, { useState, useContext } from "react";
import Item from "./Item";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShoppingCartContext";
const Navbar = ({ nombre, categorias, producto }) => {
const {longitud} = useContext(CartContext)
let numeroCarro = longitud;

  const [navActive, setActive] = useState("Home")
  const [setProductos] = useState([])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="t-decoration-n" to="/" onClick={()=>setActive("Home")}>
            <h1>{nombre}</h1>
          </Link>
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
              {categorias.map(categoria => 
                <>
                 <Item nombre={categoria} link={`/category/${categoria}`} active={navActive} setActive={setActive}></Item>
                 </>
              )}
            </ul>
            <CartWidget cantidad={numeroCarro}></CartWidget>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

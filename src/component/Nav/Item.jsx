import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, link, active, setActive }) => {

  return (
    <>
    <li className={active === nombre ? "nav-item active" : "nav-item"}  onClick={()=>setActive(nombre)}>
    <Link to={link}>
        <div
          className="nav-link text-center"
          aria-current="page">
          {nombre}
        </div>
        </Link>
      </li>
    </>
  );
};

export default Item;

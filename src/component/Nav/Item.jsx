import React from "react";

const Item = ({ nombre, link, active }) => {
  return (
    <>
      <li className="nav-item">
        <a
          className={active ? "nav-link active" : "nav-link"}
          aria-current="page"
          href={link}
        >
          {nombre}
        </a>
      </li>
    </>
  );
};

export default Item;

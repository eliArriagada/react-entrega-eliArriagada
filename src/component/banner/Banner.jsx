import React from 'react'
import { Link } from "react-router-dom";

function Banner({titulo, subTitulo, texto, tieneBoton=false, textoBoton,nameImage}) {
  return (
    <div className="d-flex flex-column justify-content-center banner w-100 h-10" style={{
              backgroundImage: `url(${nameImage})` 
              
      }}>
        <h1>{titulo}</h1>
        <h2>{subTitulo}</h2>
        <p >{texto}</p>
       { tieneBoton?
        <Link to="category/CORTE%20Y%20PEINADOS">
        <div
          className="btn btn-primary">
          {textoBoton}
        </div>
        </Link>: ''}
        
      </div>
  )
}

export default Banner
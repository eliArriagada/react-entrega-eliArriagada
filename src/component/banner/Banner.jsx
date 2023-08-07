import React from 'react'

function Banner({titulo, subTitulo, texto, tieneBoton=false, textoBoton, click = (x=>x),nameImage}) {
  return (
    <div className="d-flex flex-column justify-content-center banner w-100 h-10" style={{
              backgroundImage: `url(${nameImage})` 
              
      }}>
        <h1>{titulo}</h1>
        <h2>{subTitulo}</h2>
        
        <p >{texto}</p>
       { tieneBoton?<button type="button" onClick={click} className="btn btn-primary">{textoBoton}</button>: ''}
        
      </div>
  )
}

export default Banner
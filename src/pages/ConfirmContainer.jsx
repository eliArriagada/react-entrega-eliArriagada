import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';

const ConfirmContainer = () => {
  const { confirmacion } = useParams()
  const { setActive } = useContext(CartContext)

  return (
    <div className='container'>
      <div class="row my-5">
        <div class="col-3 ">
          <h2 id="titulo" class="">Confirmacion</h2>

        </div>
        <div class="col d-block">
          <hr class="border border-primary border-3 opacity-75" />
        </div>
      </div>

      <div class="row text-center align-items-center">
        <div class="col-12">
          <p>Se ha registrado su compra de forma exitosa, le llegará un email con el detalle de la compra.</p>
          <p>Su número de orden es: </p>
          <h2 id="numeroOrden" class="logo">{confirmacion}</h2>
        </div>
        <Link className="btn btn-secondary" to="/" onClick={setActive("home")}>
          Ir al home
        </Link>
      </div>
    </div>
  )
}

export default ConfirmContainer
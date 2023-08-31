import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { CartContext } from '../context/ShoppingCartContext'
import swal from 'sweetalert';

function ItemDetailContainer() {
    const { product } = useParams()
    const producto = products.filter(x => x.id == product)[0]
    const [counter, setCounter] = useState(1)
    const {cart, setCart} = useContext(CartContext)

    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }


    return (
        <div className='container'>
            <div class="row my-5">
                <div class="col-3 ">
                    <h2 id="titulo" class="">{producto.nombre}</h2>

                </div>
                <div class="col d-block">
                    <hr class="border border-primary border-3 opacity-75" />
                </div>
            </div>
            <div class="row row-cols-md-2 row-cols-sm-1 row-cols-sm-1 my-5">
                <img src={producto.imagen} class="col-6"></img>
                <div class="col-2 py-3">
                    <div class="row">
                        <div class="col">
                            <h3 id="precio" class="logo">{producto.precio} </h3>
                            <hr />
                        </div>
                    </div>
                    <div id="liveAlertPlaceholder"></div>

                    <div class="row">

                        <div class="col">
                            <div class="row py-3">
                            </div>
                            <div class="row">
                                <div class="col">
                                <div>Numeros de personas:</div>

                                    <button id="botonMenos" onClick={decrement} type="button" class="btn btn-circle btn-outline-primary text-dark">
                                        -
                                    </button>
                                    &nbsp;{counter}&nbsp;
                                    <button id="botonMas" onClick={increment} type="button" class="btn btn-circle btn-outline-primary text-dark">
                                        +
                                    </button>
                                </div>

                            </div>
                            <div class="row py-3">
                                <button id="botonAgregar" type="button" class="btn btn-primary"  onClick={()=>{
                                    for (let index = 0; index < counter; index++) {
                                        cart.push(producto)
                                        setCart(cart)
                                        swal("Se ha agregado exitosamente.")
                                    }
                                   
                                }}>
                                    Agregar
                                </button>

                                <Link to={`/category/${producto.categoria}`} className="btn btn-secondary">Volver</Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
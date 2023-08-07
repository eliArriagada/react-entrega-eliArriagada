import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'

function ItemDetailContainer() {
    const { product } = useParams()
    const producto = products.filter(x => x.id == product)[0]
    const [counter, setCounter] = useState(0)

    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 0) {
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis nobis eveniet maiores possimus sunt sequi libero minima optio! Recusandae nostrum, rem asperiores reprehenderit vero officiis dicta magni natus quo.
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
                                <button id="botonAgregar" type="button" class="btn btn-primary">
                                    Agregar
                                </button>

                                <Link to="/" className="btn btn-secondary">Volver</Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
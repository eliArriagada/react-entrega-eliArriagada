import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'

function ItemListContainer() {
    const { category } = useParams()
    let productos =products.filter(x => x.categoria === category)


    return (
        <div className='container'>
                     <div class="row my-5">
                <div class="col-3">
                    <h2 id="titulo" class="">{category}</h2>

                </div>
                <div class="col">
                    <hr class="border border-primary border-3 opacity-75" />
                </div>
            </div>
            <div className="row">
                {
                    productos.map(producto =>
                        <div className="col-4">
                        <div className="m-3 card">
                            {
                                producto.imagen ?<img src={producto.imagen} className="card-img-top" alt="..."/>
                                :null
                                }
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.precio}</p>
                                <a href="#" className="btn btn-primary">Agregar</a>
                                <Link to={`/product/${producto.id}`} className="btn btn-secondary">Ver Detalle
                                </Link>
                            </div>
                        </div>
                    </div>    
                    )}
                    
            </div>


        </div>
    )
}

export default ItemListContainer
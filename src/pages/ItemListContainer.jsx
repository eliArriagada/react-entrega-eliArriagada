import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'
import swal from 'sweetalert';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function ItemListContainer() {

    const { category } = useParams()
    const [products, setProducs] = useState([])

    useEffect(() => {
      const bd = getFirestore();
      const productosColection = collection(bd, "products")
      getDocs(productosColection).then(p => {
        setProducs(p.docs.map(x => ({ id: x.id, ...x.data() })))
      });
    }, [])
    
    const {cart, setCart} = useContext(CartContext)
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
                    products.filter(x=>x.categoria === category).map(producto =>
                        <div className="col-4">
                        <div className="m-3 card">
                            {
                                producto.imagen ?<img src={producto.imagen} className="card-img-top" alt="..."/>
                                :null
                                }
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.precio}</p>
                                <button className="btn btn-primary" onClick={()=>{
                                    const newProducts = [...cart];

                                    newProducts.push(producto)
                                    setCart(newProducts)
                                    swal("Se ha agregado exitosamente.")

                                }}>Agregar</button>
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
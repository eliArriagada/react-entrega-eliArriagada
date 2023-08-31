import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext'
import swal from 'sweetalert';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CartDetailContainer() {
    const removeElement = (array, element) => {
        let index = array.indexOf(element);

        const newContacts = [...array];
        newContacts.splice(index, 1);
        setCart(newContacts);
        swal("Se ha eliminado el producto del carro")
    }
    const { cart, setCart } = useContext(CartContext)
    const { setActive } = useContext(CartContext)

    const [startDate, setStartDate] = useState(new Date());

    const [nombre, setNombre] = useState("");
    const [esDomicilio, setEsDomicilio] = useState(false);



    setActive("home")
    const navigate = useNavigate()
    const cuerpo = cart.map(producto => {
        return (
            <tr>
                <td class="align-baseline">
                    <div class="row text-center align-items-center">
                        <div class="col">
                            <h4 class="titulo-producto my-0">{producto.nombre}</h4>
                        </div>
                    </div>
                </td>
                <td>{producto.precio}</td>
                <td><i class="bi bi-eraser text-primary" onClick={() => removeElement(cart, producto)
                }></i></td>
            </tr>)
    })


    const sum = cart.map(x => parseInt(x.precioNumerico)).length > 0 ? cart.map(x => parseInt(x.precioNumerico)).reduce((total, item) => total + item) : 0

    return (
        <div className='container'>
            <div class="row my-5">
                <div class="col-3 ">
                    <h2 id="titulo" class="">Carro</h2>

                </div>
                <div class="col d-block">
                    <hr class="border border-primary border-3 opacity-75" />
                </div>
            </div>
            <div class="row carro-productos p-5">
                <div class="col">
                    {cart.length > 0 ?
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody id="tablaDatos">
                                {cuerpo}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>
                                        <h5 class="titulo-producto" for="">$
                                            {sum}
                                        </h5>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        : <><div class="col-12">
                            Lo sentimos, aún no ha agregado nada al carro.
                        </div>
                            <div class="col-12">
                                <Link className="btn btn-secondary" to="/">
                                    Ir al home
                                </Link></div>
                        </>
                    }
                </div>
               
            </div>
            {cart.length > 0 ?<>
            <div class="row my-5">
                <div class="col-3 ">
                    <h2 id="titulo" class="">Datos Contacto</h2>

                </div>
                <div class="col d-block">
                    <hr class="border border-primary border-3 opacity-75" />
                </div>
            </div>
            <div class="row carro-productos p-5">
                <div class="col">
                    <div class="form-group p-2">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" value={nombre} onChange={(e)=>{
                            setNombre(e.target.value)}} id="nombre" placeholder="Ingresa tu nombre" required />
                    </div>
                    <div class="form-group p-2">
                        <label for="fecha">Fecha de Servicio:</label> <br />
                        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                    <div class="form-group p-2">
                        <label for="domicilio">¿Es a domicilio?</label>
                        <select class="form-control" onChange={(e)=>{setEsDomicilio(e.target.value==="si")}} id="domicilio">
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                </div>
            </div>
            <div class="row py-3 text-right text-end carro-productos">
                    <div class="col-6 col-sm-12 py-3">
                        <button id="botonPagar" type="button" class="btn btn-primary" onClick={() =>

                            swal({
                                title: "Esta seguro de hacer la compra?",
                                icon: "success",
                                buttons: true,
                            })
                                .then((confirmar) => {
                                    if (confirmar) {
                                        
                                        const pedido = {
                                            fecha: new Date(),
                                            producto: cart,
                                            persona: {nombre,startDate,esDomicilio},
                                            total: sum
                                        }

                                        const bd = getFirestore();
                                        const pedidoCollection = collection(bd, "pedido");
                                        addDoc(pedidoCollection, pedido)
                                            .then(({ id }) => {
                                                setCart([])
                                                navigate(`/confirmacion/${id}`);
                                            })
                                            .then(() => {

                                            })
                                    }
                                })
                        }>Pagar</button>
                    </div>
                </div>
                </>:<></>}
        </div>

    )
}

export default CartDetailContainer
import './css/app.css';
import { useState } from "react";

import Navbar from './component/nav/Navbar';
import Index from './pages/Index';
import Footer from './component/footer/Footer';
import products from './data/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ShoppingCartContext from './context/ShoppingCartContext';
import CartDetailContainer from './pages/CartDetailContainer';
import ConfirmContainer from './pages/ConfirmContainer';

function App() {
  const [categorias, setCategorias] = useState([])
  const getProductos = new Promise((resolve, reject) => {

    if (products.length > 0) {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
      setCategorias(Array.from(new Set(res.map(x => x.categoria))))

    })
    .catch((error) => {
      console.log(error)
    })


  return (


    <>
    <ShoppingCartContext>
        <BrowserRouter>
      <Navbar nombre="EveDreams" categorias={categorias}></Navbar>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/product/:product" element={<ItemDetailContainer />} />
        <Route exact path="/carro" element={<CartDetailContainer />} />
        <Route exact path="/confirmacion" element={<ConfirmContainer />} />

      </Routes>
      <Footer></Footer>

    </BrowserRouter>
    </ShoppingCartContext>
    </>
  );
}

export default App;

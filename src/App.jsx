import './css/app.css';
import { useEffect, useState } from "react";

import Navbar from './component/nav/Navbar';
import Index from './pages/Index';
import Footer from './component/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ShoppingCartContext from './context/ShoppingCartContext';
import CartDetailContainer from './pages/CartDetailContainer';
import ConfirmContainer from './pages/ConfirmContainer';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

function App() {
  const [categorias, setCategorias] = useState([])
  const [products, setProducs] = useState([])

    useEffect(() => {
      const bd = getFirestore();
      const productosColection = collection(bd, "products")
      getDocs(productosColection).then(p => {
        setProducs(p.docs.map(x => ({ id: x.id, ...x.data() })))
      });
    }, [])

    useEffect(() => {
      const bd = getFirestore();
      const productosColection = collection(bd, "category")
      getDocs(productosColection).then(p => {
        setCategorias(p.docs.map(x => x.data().nombre))
      });
    }, [])

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
            <Route exact path="/confirmacion/:confirmacion" element={<ConfirmContainer />} />

          </Routes>
          <Footer></Footer>

        </BrowserRouter>
      </ShoppingCartContext>
    </>
  );
}

export default App;

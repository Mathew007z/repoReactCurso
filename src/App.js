import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Title from './components/Title/Title';
import CartProvider from "./context/CartContext";
function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
             <Navbar />
              <Routes>
                <Route path="/" element={<ItemListContainer message="Bienvenido a CompraOnline" />}/>
                <Route path="/" element={<Title/>}/>
                <Route path="/categoria/:categoriaId"element={<ItemListContainer message="Bienvenido a CompraOnline" />}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

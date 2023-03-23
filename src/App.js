import React, { useState } from 'react';
import CartElem from './Components/Cart/Cart';
import Header from './Components/NavBar/header';
import NavBar from './Components/NavBar/Navbar';
import Productsdata from '../src/Components/Products/products'
import CartProvider from './Store/CartProvider';

function App() {
  const [cartshow,setcartshow]=useState(false)
  const showcartHandler=(props)=>{
    setcartshow(true);
  }
  const hidecartHandler=()=>{
    setcartshow(false)
  }

  return (
    <CartProvider>
      <NavBar onshowcart={showcartHandler}/>
      {cartshow && <CartElem onClose={hidecartHandler} />}
      <Header />
      <Productsdata />
    </CartProvider>
  );
}

export default App;

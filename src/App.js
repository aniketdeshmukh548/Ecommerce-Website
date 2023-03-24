import React, { useState } from 'react';
import CartElem from './Components/Cart/Cart';
import Header from './Components/NavBar/header';
import NavBar from './Components/NavBar/Navbar';
import Productsdata from '../src/Components/Products/products'
import CartProvider from './Store/CartProvider';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aboutpage from './Pages/About';
import Homepage from './Pages/Home';
import Storepage from './Pages/Store';
import Errorpage from './Pages/Error';
import Footer from './Components/Footer/Footer';

const router=createBrowserRouter([
  {path:'/about', element:<Aboutpage />,errorElement:<Errorpage />},
  {path:'/home',element:<Homepage />},
  {path:'/store',element:<Storepage />}
])

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
      <RouterProvider router={router}/>
    </CartProvider>
  );
}

export default App;

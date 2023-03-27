import React, { useState } from 'react';
import CartElem from './Components/Cart/Cart';
import NavBar from './Components/NavBar/Navbar';
import CartProvider from './Store/CartProvider';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aboutpage from './Pages/About';
import Homepage from './Pages/Home';
import Storepage from './Pages/Store';
import Errorpage from './Pages/Error';
import Contact from './Pages/ContactUs';

const router=createBrowserRouter([
  {path:'/about', element:<Aboutpage />,errorElement:<Errorpage />},
  {path:'/home',element:<Homepage />},
  {path:'/store',element:<Storepage />},
  {path:'/contact',element:<Contact />}
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

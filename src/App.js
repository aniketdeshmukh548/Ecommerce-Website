import React, {useState } from 'react';
import CartElem from './Components/Cart/Cart';
import NavBar from './Components/NavBar/Navbar';
import CartProvider from './Store/CartProvider';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aboutpage from './Pages/About';
import Homepage from './Pages/Home';
import Storepage from './Pages/Store';
import Errorpage from './Pages/Error';
import Contact from './Pages/ContactUs';
import ProductPage from './Pages/ProductsPage';
import ProdDetail from './Pages/ProdDetail';
import MainNavigation from './Components/Layout/MainNavigation';
import ProfileForm from './Components/Auth/ProfileForm';
import AuthForm from './Components/Auth/AuthForm';
import StartingPageContent from '../src/Components/StartingPage/StartingPageContent';

const router=createBrowserRouter([
  {
    path:'/',errorElement:<Errorpage />,
    children:[{path:'/about', element:<Aboutpage />,errorElement:<Errorpage />},
    {index:true,path:'/home',element:<Homepage />},
    {path:'/store',element:<Storepage />},
    {path:'/contact',element:<Contact />},
    {path:'/mainvaigation',element:<MainNavigation />},
    {path:'/auth',element:<AuthForm />},
    {path:'/startpage',element:<StartingPageContent />},
    {path:'/auth',element:<AuthForm />},
    {path:'/profile',element:<ProfileForm />},
    {path:'/product',element:<ProductPage />},
    {path:'/product/:prodID',element:<ProdDetail />}]
  }

  
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

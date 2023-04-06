
import classes from './Navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartbtn from '../Button/CartButton';
import { NavLink } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
const NavBar=(props)=>{
   const authCtx=useContext(CartContext)
   const isLoggedIn=authCtx.isLoggedIn;
   const LogoutHandler=()=>{
      authCtx.logout();
    }
    return(
        <>
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/mainvaigation">E-Commerce Website</Navbar.Brand>
        <Nav className="me-auto">
            {isLoggedIn && <NavLink href='/home' className={({isActive})=>
           isActive ? classes.active :undefined
        }>HOME</NavLink>}
        {isLoggedIn && <NavLink href='/store' className={({isActive})=>
           isActive ? classes.active :undefined
        }>STORE</NavLink>}
        {isLoggedIn && <NavLink href='/product' className={({isActive})=>
           isActive ? classes.active :undefined
        }>PRODUCTS</NavLink>}
           <NavLink href='/about' className={({isActive})=>
           isActive ? classes.active :undefined
        }>ABOUT</NavLink>
        {isLoggedIn && <NavLink href='/contact' className={({isActive})=>
           isActive ? classes.active :undefined
        }>CONTACT US</NavLink>}
        {!authCtx.isLoggedIn && <NavLink href='/auth' className={({isActive})=>
           isActive ? classes.active :undefined
        }>LOGIN</NavLink>}
        {isLoggedIn && <NavLink href='/profile' className={({isActive})=>
           isActive ? classes.active :undefined
        }>Profile </NavLink>}
        {isLoggedIn && <li>
            <button type="button" class="btn btn-danger" onClick={LogoutHandler}>Logout</button>
          </li>}
            <Cartbtn onClick={props.onshowcart}/>
            </Nav>
      </Container>
    </Navbar>
    </>
    )
}

export default NavBar;
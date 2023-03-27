
import classes from './Navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartbtn from '../Button/CartButton';
import { NavLink } from 'react-bootstrap';
const NavBar=(props)=>{
    return(
        <>
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/store">E-Commerce Website</Navbar.Brand>
        <Nav className="me-auto">
            <NavLink href='/home' className={({isActive})=>
           isActive ? classes.active :undefined
        }>HOME</NavLink>
            <NavLink href='/store' className={({isActive})=>
           isActive ? classes.active :undefined
        }>STORE</NavLink>
        <NavLink href='/product' className={({isActive})=>
           isActive ? classes.active :undefined
        }>PRODUCTS</NavLink>
           <NavLink href='/about' className={({isActive})=>
           isActive ? classes.active :undefined
        }>ABOUT</NavLink>
        <NavLink href='/contact' className={({isActive})=>
           isActive ? classes.active :undefined
        }>CONTACT US</NavLink>
            <Cartbtn onClick={props.onshowcart}/>
            </Nav>
      </Container>
    </Navbar>
    </>
    )
}

export default NavBar;
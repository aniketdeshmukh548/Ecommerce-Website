
import classes from './Navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartbtn from '../Button/CartButton';
const NavBar=(props)=>{
    return(
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">E-Commerce Website</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home" className={classes.home}>HOME</Nav.Link>
            <Nav.Link href="#link">STORE</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Cartbtn onClick={props.onshowcart}/>
            </Nav>
      </Container>
    </Navbar>
    )
}

export default NavBar;
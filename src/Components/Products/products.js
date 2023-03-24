import React,{Fragment, useContext} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from '../../Store/cart-context';
const productsArr = [ { 
  id:1,    
  title: 'Colors',      
  price: 100,     
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',     
  },     
  {  
  id:2,     
  title: 'Black and white Colors',    
  price: 50,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',    
  },  
  {
  id:3,    
  title: 'Yellow and Black Colors',  
  price: 70,
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },     
  {     
  id:4,
  title: 'Blue Color',
  price: 100, 
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
  ];
const Productsdata = (props) => {
  const cartCtx=useContext(CartContext)
    const addToCartHandler=(props)=>{
        cartCtx.addItem({
            key: props.id,
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.imageUrl,
            amount: 1
          })
          props.addtocart(props.id,props.title,props.price,props.imageUrl)     
    }
  
   return (
        <div className="row p-0 m-0">
          <h2 className="bg-white text-dark p-2 mt-2 mb-2 text-center">Products</h2>
          {productsArr.map((products) => {
            return (
                <Fragment>
                    <Row><Col sm={5}></Col>
              <Card style={{ width: '18rem' }} className="g-2" xs={1} md={2}>
              <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Img variant="top" src={products.imageUrl} />
              <Card.Text>{products.price}</Card.Text>
              <Button variant="primary" onClick={addToCartHandler}>Add To Cart</Button>
            </Card.Body>
            </Card>
            </Row>
            </Fragment>
            );
          })}
        </div>
      );
    }

export default Productsdata;
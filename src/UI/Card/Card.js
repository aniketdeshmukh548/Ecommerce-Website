import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardComp=(props)=>{
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Colors</Card.Title>
        <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
        <Card.Text>20 Rs/-</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    )
}
export default CardComp;

    




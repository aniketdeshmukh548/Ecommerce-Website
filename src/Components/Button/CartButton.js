import { useContext } from 'react';
import Button  from 'react-bootstrap/Button';
import CartContext from '../../Store/cart-context';
const Cartbtn=(props)=>{
    const cartCtx=useContext(CartContext)
    const noofcartItems=cartCtx.items.reduce((currnum,item)=>{
        return(currnum+item.amount)
    },0)
    return(
            <Button onClick={props.onClick}>Cart
            <span>({noofcartItems})</span>
            </Button>
    )
}

export default Cartbtn;
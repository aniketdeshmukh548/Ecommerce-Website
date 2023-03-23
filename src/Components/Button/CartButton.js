import { useContext } from 'react';
import Button  from 'react-bootstrap/Button';
import CartContext from '../../Store/cart-context';
import classes from './CartButton.module.css'
const Cartbtn=(props)=>{
    const cartCtx=useContext(CartContext)
    const noofcartItems=cartCtx.items.reduce((currnum,item)=>{
        return(currnum+item.amount)
    },0)
    return(
            <Button onClick={props.onClick}>Cart
            <span className={classes.cartnum}>Total Items:{noofcartItems}</span>
            </Button>
    )
}

export default Cartbtn;
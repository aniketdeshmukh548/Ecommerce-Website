import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../../UI/Modal/Modal";
import classes from './Cart.module.css'
const CartElem = (props) => {
    const addToCartHandler=(props)=>{
        
    }
  return (
    <Modal onClose={props.onClose}>
        <div>{addToCartHandler}</div>
        <button className={classes.close} onClick={props.onClose}>Close</button>
        <button className={classes.order}>Order</button>
    </Modal>
  );
};
export default CartElem;

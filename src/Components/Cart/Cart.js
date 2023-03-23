import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../../UI/Modal/Modal";
import classes from './Cart.module.css'
const CartElem = (props) => {
    const cartCtx=useContext(CartContext)
    const addToCartHandler=(clickedprod)=>{
        cartCtx.addItem({
            id:props.id,
        })
    }
  return (
    <Modal onClose={props.onClose}>
        <div onAddToCart={addToCartHandler}></div>
        <button className={classes.close} onClick={props.onClose}>Close</button>
        <button className={classes.order}>Order</button>
    </Modal>
  );
};
export default CartElem;

import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../../UI/Modal/Modal";
import Productsdata from "../Products/products";
import classes from './Cart.module.css'
const CartElem = (props) => {
  // useContext(CartContext)
  //   const addToCartHandler=(props)=>{
  //       CartContext.addItem(props.item)
  //   }
  const cartCtx=useContext(CartContext)
    const addToCartHandler=(props)=>{
      cartCtx.addItem({
          key: props.id,
          id: props.id,
          title: props.title,
          price: props.price,
          image: props.imageUrl,
          amount: 1
        })}
        
  return (
    <Modal onClose={props.onClose}>
        <Productsdata addtocart={addToCartHandler}/>
        <button className={classes.close} onClick={props.onClose}>Close</button>
        <button className={classes.order}>Order</button>
    </Modal>
  );
};
export default CartElem;

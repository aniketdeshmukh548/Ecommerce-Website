import Modal from "../../UI/Modal/Modal";
import classes from './Cart.module.css'
const CartElem = (props) => {
  const cartElements = [
    {
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
          quantity: 2,
      },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
    },
  ];
  return (
    <Modal onClose={props.onClose}>
        <div>Items</div>
        <button className={classes.close} onClick={props.onClose}>Close</button>
        <button className={classes.order}>Order</button>
    </Modal>
  );
};
export default CartElem;

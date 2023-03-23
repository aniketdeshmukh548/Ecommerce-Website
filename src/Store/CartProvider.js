//import { useReducer } from 'react';

import CartContext from './cart-context';

const CartProvider = (props) => {
  const additemtoCart=(item)=>{

  }
  const removeitemfotmCart=(id)=>{

  }
  const cartContext={
    items:[],
    totalAmount:0,
    addItem:additemtoCart,
    removeItem:removeitemfotmCart
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
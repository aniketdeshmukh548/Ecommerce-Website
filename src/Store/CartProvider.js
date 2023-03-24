import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartstate={
  items:[],
  totalAmount:0,
}
const cartReducer=(state,action)=>{
  if(action.type='ADD'){
     const updatedItems=state.items.concat(action.item) ;
     const updatedTotalamount=state.totalAmount+action.item.price*action.item.amount;
     return{
      items:updatedItems,
      totalAmount:updatedTotalamount
     }
  }
  return(
    defaultCartstate
  )
}
const CartProvider = (props) => {
  const [cartState,dispatchcartAction]=useReducer(cartReducer,defaultCartstate)
  const additemtoCart=(item)=>{
    dispatchcartAction({type:'ADD',item:item})
  }
  const removeitemfromCart=(id)=>{
    dispatchcartAction({type:'REMOVE',id:id})
  }
  const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:additemtoCart,
    removeItem:removeitemfromCart
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
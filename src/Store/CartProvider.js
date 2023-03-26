import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartstate={
  items:[],
  totalAmount:0,
}
const cartReducer = (state, action) => {
  if(action.type === 'ADD')
  {
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
      // const updatedItems = state.items.concat(action.item)

      const exsistingCartItemsIndex = state.items.findIndex(
          (item) => item.id === action.item.id);
          
          const existingcartitem = state.items[exsistingCartItemsIndex]
          let updatedItems;
    
          if(existingcartitem) {
            const updatedItem = {
              ...existingcartitem,
              amount: existingcartitem.amount + action.item.amount
            }
    
            updatedItems = [...state.items];
            updatedItems[exsistingCartItemsIndex] = updatedItem;
          }
          else {
            updatedItems = state.items.concat(action.item);
          }

      return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
      }
  }

  if(action.type === 'REMOVE')
  {
  const exsistingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingcartitem = state.items[exsistingCartItemsIndex];
    const updatedtotalAmount = state.totalAmount - existingcartitem.price;

    let updatedItems;
    if(existingcartitem.amount === 1)
    {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }
    else {
      const updatedItem = {...existingcartitem, amount: existingcartitem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[exsistingCartItemsIndex] = updatedItem;
    }

    return {
      items : updatedItems,
      totalAmount: updatedtotalAmount
    }
  }

  return defaultCartstate;
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
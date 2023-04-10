import { useCallback, useEffect, useReducer,useState } from 'react';
import CartContext from './cart-context';

let logoutTimer;
const defaultCartstate={
  items:[],
  totalAmount:0,
}
const cartReducer = (state, action) => {
  if(action.type === 'ADD')
  {
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

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

const calremTime=(exipirationTime)=>{
  const currTime=new Date().getTime();
  const adjustedexpirtime=new Date(exipirationTime).getTime();
  const remainingtime=adjustedexpirtime-currTime;
  return remainingtime;
}
// const retrivestoredToken=()=>{
//   const storedToken = localStorage.getItem('token');
//   const storedexpirDate=localStorage.getItem("exipirationTime");
//   const remainingtime=calremTime(storedexpirDate)
//   if(remainingtime<=3600){
//     localStorage.removeItem('token')
//     localStorage.removeItem("exipirationTime")
//     return null;
//   }
//   return {
//     token:storedToken,
//     duration:remainingtime,
//   };
// }
const CartProvider = (props) => {
    const [cartState,dispatchcartAction]=useReducer(cartReducer,defaultCartstate);
    // const tokenData =retrivestoredToken();
    // let initialToken;
    // if(initialToken){
    //   initialToken = tokenData.token;
    // }
    const initialToken=localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)

    const userLoggedIn = !!token;

  const LogoutHandler =useCallback( () => {
      setToken(null)
      localStorage.removeItem('token')
      // localStorage.removeItem('exipirationTime')
      // if(logoutTimer){
      //   clearTimeout(logoutTimer)
      // }
  },[])
  const LoginHandler = (token,exipirationTime) => {
    setToken(token)
    localStorage.setItem('token',token)
    const remainingtime=calremTime(exipirationTime)
    setTimeout(LogoutHandler,remainingtime)
    // logoutTimer=setTimeout(LogoutHandler,remainingtime)
    // localStorage.setItem('exipirationTime',exipirationTime)
}
// useEffect(()=>{
//   if(tokenData){
//     console.log(tokenData.duration)
//     logoutTimer=setTimeout(LogoutHandler,tokenData.duration)
//   }
// },[tokenData,LogoutHandler])

  const additemtoCart=(item)=>{
    dispatchcartAction({type:'ADD',item:item})
  }
  const removeitemfromCart=(id)=>{
    dispatchcartAction({type:'REMOVE',id:id})
  }
  const cartContext={
      token: token,
      isLoggedIn: userLoggedIn,
      login: LoginHandler,
      logout: LogoutHandler,
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
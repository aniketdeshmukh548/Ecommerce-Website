import { useContext } from 'react';
import { useState, useRef } from 'react';
import CartContext from '../../Store/cart-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading,setIsloading]=useState(false)
  const [isLogin, setIsLogin] = useState(true);
  const authCtx=useContext(CartContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPass=passwordInputRef.current.value;
    setIsloading(true)
    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0_I5oxXTsZ05qxfslHEldnM0cxUx_XMM'
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0_I5oxXTsZ05qxfslHEldnM0cxUx_XMM'
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPass,
          returnSecureToken:true,
        }),
        headers: {
          "Content-Type": 'application/json'
        }
      }).then(res=>{
        setIsloading(false)
        if(res.ok){
          return res.json()
        }else{
          return res.json().then(data=>{
            let errorMessage='Authentication Failed';
            // if(data && data.error &&data.errorMessage){
            //   errorMessage=data.error.message
            // }
            
            throw new Error(errorMessage)
          })
        }
      }).then(data=>{
        authCtx.login(data.idToken)
      }).catch(err=>{
        alert(err.message)
      })
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button className="btn btn-dark m-2">{isLogin ? 'Login' : 'Create Account'}</button>}
        {isLoading && <p>Sending Request ....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

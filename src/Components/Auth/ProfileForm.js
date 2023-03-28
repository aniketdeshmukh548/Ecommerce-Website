import { useContext } from 'react';
import { useRef } from 'react';
import CartContext from '../../Store/cart-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authCtx=useContext(CartContext)
  const newPasswordInputRef=useRef();

  const submitHandler=event=>{
    event.preventDefault()
    const enteredPassword=newPasswordInputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD0_I5oxXTsZ05qxfslHEldnM0cxUx_XMM',{
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx,
        password:enteredPassword,
        returnSecureToken:false,
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then((res)=>{
      console.log('sucess')
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7'ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

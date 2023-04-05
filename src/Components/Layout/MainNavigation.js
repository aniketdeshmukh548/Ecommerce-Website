import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Store/cart-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx=useContext(CartContext)
  const isLoggedIn=authCtx.isLoggedIn;
  const LogoutHandler=()=>{
    authCtx.logout();
  }
  return (
    <header className={classes.header}>
      <Link to='/mainvaigation'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
            <Link to='/auth'>Login</Link>
          </li>
          )}<Link to='/profile'>Profile</Link>
          {isLoggedIn && (
             <li>
             <Link to='/profile'>Profile</Link>
           </li>
          )}
            <li>
            <button onClick={LogoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import styleFor from './NavStartPanel.module.css';

const NavStartPanel = () => {
  return ( 
    <form class="form-inline my-2 my-lg-0">
          <NavLink className={styleFor.action__button_log} type="button" to='/log_in'>Log In</NavLink>
          <NavLink className={styleFor.action__button_sign} type="button" to='/sign_up'>Sign Up</NavLink>
        </form>
  );
}

export default NavStartPanel;

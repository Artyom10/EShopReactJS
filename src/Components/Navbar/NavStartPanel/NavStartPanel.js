import React from 'react';
import styleFor from './NavStartPanel.module.css';

function NavStartPanel() {
  return ( 
    <form class="form-inline my-2 my-lg-0">
          <button className={styleFor.action__button_log} type="button" data-toggle="modal" data-target="#logIn">Log In</button>
          <button className={styleFor.action__button_sign} type="button" data-toggle="modal" data-target="#signUp">Sign Up</button>
        </form>
  );
}

export default NavStartPanel;

import React from 'react';

function NavStartPanel() {
  return ( 
    <form class="form-inline my-2 my-lg-0">
          <button class="btn action-button_log" type="button" data-toggle="modal" data-target="#logIn">Log In</button>
          <button class="btn action-button_sign" type="button" data-toggle="modal" data-target="#signUp">Sign Up</button>
        </form>
  );
}

export default NavStartPanel;

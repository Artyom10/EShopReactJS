import React from 'react';

function Nav() {
  return (
    <nav className="navbar my-navbar navbar-expand-lg navbar-light">
       <div className="container">
          <a className="navbar-brand" href="#"><div className="logo"><span>E</span>Shop</div></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/pages/index.html">Main page</a>
          </li>
        </ul>
        
        <form className="form-inline my-2 my-lg-0">
          <button className="btn action-button_log" type="button" data-toggle="modal" data-target="#logIn">Log In</button>
          <button className="btn action-button_sign" type="button" data-toggle="modal" data-target="#signUp">Sign Up</button>
        </form>
      </div>
       </div>
    </nav>
  );
}

export default Nav;

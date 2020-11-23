import React from 'react';

function NavAdminPanel() {
  return ( 
        <form className="form-inline my-2 my-lg-0">
           <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Exit</a>
            </li>
          </ul>
        </form>
  );
}

export default NavAdminPanel;

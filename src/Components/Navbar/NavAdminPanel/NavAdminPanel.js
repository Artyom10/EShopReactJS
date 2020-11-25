import React from 'react';
import { NavLink } from 'react-router-dom';

function NavAdminPanel() {
  return ( 
        
           <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clients">Clients</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exit">Exit</NavLink>
            </li>
          </ul>
     
  );
}

export default NavAdminPanel;

import React from 'react';
import { NavLink } from 'react-router-dom';

function NavClientPanel() {
  return ( 
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <NavLink className="nav-link" to="/profile">Profile</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/bag">Bag</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/exit">Exit</NavLink>
    </li>
  </ul>
  );
}

export default NavClientPanel;

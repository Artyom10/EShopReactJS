import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut} from '../../../redux/actions/authActions';

function NavClientPanel(props) { 
  return ( 
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <NavLink className="nav-link" to="/profile">Profile</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/userProducts">Valued products</NavLink>
    </li>
    {/*<li className="nav-item">
      <NavLink className="nav-link" to="/bag">Bag</NavLink>
  </li> */}
    <li className="nav-item">
      <a onClick={props.signOut} className="nav-link">Log Out</a>
    </li>
  </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(NavClientPanel);

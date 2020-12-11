import { checkPropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut} from '../../../redux/actions/authActions';

function NavAdminPanel(props) { 
  return ( 
        
           <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clients">Clients</NavLink>
            </li>
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

export default connect(null, mapDispatchToProps)(NavAdminPanel);

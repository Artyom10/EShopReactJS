import React from 'react';
import { connect} from 'react-redux';
import { signOut } from '../../redux/actions/authActions';
import Nav from './Nav';


const mapStateToProps = (state) => {
    console.log(state);
  return {
  auth: state.firebase.auth,
  isWho: state.firebase.profile.isWho,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);

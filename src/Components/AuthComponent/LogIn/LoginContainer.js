import React from 'react';
import { connect } from 'react-redux';
import {signIn} from '../../../redux/actions/authActions';
import LogInWithHooks from './LogInWithHooks';


const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInWithHooks);

import React, {Component } from 'react';
import { connect } from 'react-redux';
import {signUp} from '../../../redux/actions/authActions';
import SignUpWithHooks from './SignUpWithHooks';

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWithHooks);

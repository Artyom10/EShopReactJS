import React from 'react';
import { connect } from 'react-redux';
import { cancelRequest, removeRequest, updateProfile } from '../../redux/actions/profileActions';
import Profile from './Profile';


const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateProfile: (firstName, secondName) => dispatch(updateProfile(firstName,secondName)),
      removeRequest: (user) => dispatch(removeRequest(user)),
      cancelRequest: (user) => dispatch(cancelRequest(user)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Profile);




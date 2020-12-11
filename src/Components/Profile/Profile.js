import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {removeRequestActionCreator} from '../../redux/reducers/clientsPageReducer';
import stylesFor from './Profile.module.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeTarget } from '../../redux/reducers/bagPageReducer';
import { updateProfile } from '../../redux/actions/profileActions';

/*
Profile.propTypes = {
  client: PropTypes.object.isRequired,
  id: PropTypes.number,
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  username: PropTypes.string,
  mail: PropTypes.string,
  urlPhoto: PropTypes.string,
  password: PropTypes.string
}*/

class Profile extends Component{
  state = {
     firstName: this.props.profile.firstName,
     secondName: this.props.profile.secondName,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile.firstName !== this.props.profile.firstName || prevProps.profile.secondName !== this.props.profile.secondName){
      this.setState({
        firstName: this.props.profile.firstName,
         secondName: this.props.profile.secondName,
      })
  }
}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
   this.props.updateProfile(this.state.firstName, this.state.secondName);
   //console.log(this.state);
  }

  render(){
    const {auth} = this.props;
    const {profile} = this.props;
    if(!auth.uid) return <Redirect to='/log_in' />
    return(
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <figure className="figure">
              
                <img src={profile.userPhoto} className={`figure-img img-fluid rounded ${stylesFor.profileImg}`} />
              </figure>
                <small>
                <form>
                <div className="form-group">
                  <input type="file" className="form-control-file" id="changePhoto" />
                </div>
              </form>
              </small>
          </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
                <div className="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" value={this.state.firstName}
                  onChange={this.handleChange} />
                  <label for="secondName">Second Name</label>
                  <input type="text" className="form-control" id="secondName" value={this.state.secondName}
                  onChange={this.handleChange} />
                </div>
            </form>
          </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-6">
            <button className={`tn ${stylesFor.updateButton} btn-block`} onClick={this.handleSubmit}>Update</button>
            {profile.request === false ?
            <button className={`btn ${stylesFor.generalButton} ${stylesFor.deleteButton} btn-block`} onClick={() =>{this.props.removeRequest(profile.id)}}>Delete request</button>
            : <button className={`btn ${stylesFor.generalButton} ${stylesFor.deleteButtonBack} btn-block`}>Request has been sent</button> }
          </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeRequest: (removeRequestUser) => dispatch(removeTarget(removeRequestUser)),
    updateProfile: (firstName, secondName) => dispatch(updateProfile(firstName,secondName))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {removeRequestActionCreator} from '../../redux/reducers/clientsPageReducer';
import stylesFor from './Profile.module.css';
import { Redirect } from 'react-router-dom';

function Profile(props) {
  const {auth} = props;
  if(!auth.uid) return <Redirect to='/log_in' />
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <figure className="figure">
                  <img src={props.client.urlPhoto} className={`figure-img img-fluid rounded ${stylesFor.profileImg}`} alt={props.client.username} />
                </figure>
              <small>  <form>
                  <div className="form-group">
                    <input type="file" className="form-control-file" id="changePhoto" />
                  </div>
                </form></small>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                  <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={props.client.firstName} />
                    <label for="secondName">Second Name</label>
                    <input type="text" className="form-control" id="secondName" value={props.client.secondName} />
                    <label for="secondName">Username</label>
                    <input className="form-control" type="text" value={props.client.username} readonly />
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" value={props.client.mail} />
                    <div className="row">
                        <div className="col-md">
                          <label for="oldPassword">Old password</label>
                          <input type="password" className="form-control" id="oldPassword" placeholder="" />
                        </div>
                        <div className="col-md">
                          <label for="newPassword">New password</label>
                          <input type="password" className="form-control" id="newPassword" placeholder="" />
                        </div>
                    </div>
                  </div>
              </form>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-6">
              <button className={`tn ${stylesFor.updateButton} btn-block`}>Update</button>
              {props.client.request === 'False' ?
              <button className={`btn ${stylesFor.generalButton} ${stylesFor.deleteButton} btn-block`} onClick={() =>{props.removeRequest(props.client.id)}}>Delete request</button>
              : <button className={`btn ${stylesFor.generalButton} ${stylesFor.deleteButtonBack} btn-block`}>Request has been sent</button> }
            </div>
        </div>
      </div>
        
    );

}

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

export default Profile;
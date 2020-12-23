import React, { Component, useEffect, useState } from 'react';
import stylesFor from './Profile.module.css';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  let [firstName, setFirstName] = useState(props.profile.firstName);
  let [secondName, setSecondName] = useState(props.profile.secondName);

useEffect( () => {
    setFirstName(props.profile.firstName)
    setSecondName(props.profile.secondName);
    
}, [props.profile.firstName, props.profile.secondName])

  const handleChange = (e) => {
    e.target.id === 'firstName'
    ? setFirstName(e.target.value)
    : setSecondName(e.target.value);
  }

  const handleSubmit = (e) => {

      e.preventDefault();
      props.updateProfile(firstName,secondName);
  };
  

    const {auth} = props;
    const {profile} = props;
    if(!auth.uid) return <Redirect to='/log_in' />
    return(
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <figure className="figure">
              
                <img src={profile.userPhoto} className={`figure-img img-fluid rounded ${stylesFor.profileImg}`} />
              </figure>
          </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
                <div className="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" value={firstName}
                  onChange={handleChange} />
                  <label for="secondName">Second Name</label>
                  <input type="text" className="form-control" id="secondName" value={secondName}
                  onChange={handleChange} />
                </div>
            </form>
          </div>
      </div>
      <div className="row justify-content-center">
          <div className="col-md-6">
            <button className={`tn ${stylesFor.updateButton} btn-block`} onClick={handleSubmit}>Update</button>
            {profile.request === false ?
            <button className={`btn ${stylesFor.generalButton} ${stylesFor.deleteButton} btn-block`} onClick={() =>{props.removeRequest(profile.uid)}}>Delete request</button>
            : <button className={`btn ${stylesFor.generalButton} ${stylesFor.deleteButtonBack} btn-block`} onClick={() =>{props.cancelRequest(profile.uid)}}>Request has been sent</button> }
          </div>
      </div>
    </div>
    );
}

export default Profile;
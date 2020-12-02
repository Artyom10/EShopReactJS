import React from 'react';
import PropTypes from 'prop-types';
import ModalDeleteProfile from './ModalDeleteProfile/ModalDeleteProfile';
import {removeRequestActionCreator} from '../../redux/clientsPage-reducer';


function Profile(props) {
    const {client} = props;
    const {id, firstName, secondName, username, mail, password, urlPhoto,request} = client;
    const removeRequest = () => {
      const data = {
        "id": id,
        "firstName": firstName,
        "secondName": secondName,
        "username": username,
        "mail": mail,
        "request": request, 
        "password": password,
        "urlPhoto": urlPhoto
      }
     props.removeRequest(data);
    }

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <figure className="figure">
                  <img src={urlPhoto} className="figure-img img-fluid rounded profile-img" alt={username} />
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
                    <input type="text" className="form-control" id="firstName" value={firstName} />
                    <label for="secondName">Second Name</label>
                    <input type="text" className="form-control" id="secondName" value={secondName} />
                    <label for="secondName">Username</label>
                    <input className="form-control" type="text" value={username} readonly />
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" value={mail} />
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
              <button className="btn update-button btn-block">Update</button>
               <button className="btn general-button delete-button btn-block" onClick={removeRequest}>Delete request</button>
            </div>
        </div>
        <ModalDeleteProfile />
      </div>
    );

}

function handleUpdateProfile(){
  console.log('click');
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
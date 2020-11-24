import React from 'react';

function Profile(props) {
    const {client} = props;
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <figure className="figure">
                  <img src={client.urlPhoto} className="figure-img img-fluid rounded profile-img" alt={client.username} />
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
                    <input type="text" className="form-control" id="firstName" value={client.firstName} />
                    <label for="secondName">Second Name</label>
                    <input type="text" className="form-control" id="secondName" value={client.secondName} />
                    <label for="secondName">Username</label>
                    <input className="form-control" type="text" value={client.username} readonly />
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" value={client.mail} />
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
              <button className="btn  general-button delete-button btn-block" data-toggle="modal" data-target="#notice">Delete request</button>
            </div>
        </div>
      </div>
    );
}

export default Profile;
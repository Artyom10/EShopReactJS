import React from 'react';

function ModalDeleteProfile() {
    return (
        <div className="modal fade" id="notice" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
            <h5 className="modal-title">Are you sure you want to delete your account?</h5>
          <small>After your request administrator should check your status and delete account</small>
          <div className="modal-footer">
            <button type="button" className="btn general-button cancel-button" data-dismiss="modal">No</button>
            <button type="button" className="btn general-button delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
}





export default ModalDeleteProfile;
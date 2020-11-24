import React from 'react';

function ModalSign() {
  return ( 
    <div className="modal fade" id="signUp" tabindex="-1" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content align-items-center justify-content-center">
       <div className="login-container container-signup d-flex  align-items-center justify-content-center">
         <form action="" className="login-form text-center">
           <h1 className="mb-5 font-weight-light text-uppercase">Sign Up</h1>
           <div className="form-group">
            <input type="text" className="form-control rounded-pill form-control-lg" placeholder="First Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control rounded-pill form-control-lg" placeholder="Second Name" />
          </div>
           <div className="form-group">
             <input type="text" className="form-control rounded-pill form-control-lg" placeholder="Username" />
           </div>
           <div className="form-group">
            <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Password" />
          </div>
          <div className="emergency d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input type="checkbox" class="form-check-input" id="remember" />
              <label for="remember">Remember Password</label>
            </div>
          </div>
          <button type="submit" className="btn mt-4 btn-dark btn-block text-uppercase rounded-pill btn-lg">Sign Up</button>
          <p className="mt-3 font-weight-normal">You already have an account<a href="#"> Login now</a></p>
        </form>
       </div>
      </div>
    </div>
  </div>
  );
}

export default ModalSign;

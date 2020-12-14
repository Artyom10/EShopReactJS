import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import stylesFor from './SignUp.module.css';
import {signUp} from '../../../redux/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    secondName: '',
    request: false,
    bags: null,
    valuedProducts: [],
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);  
  }

   render(){
    const {auth, authError} = this.props;
    if(auth.uid) return <Redirect to='/'/>
     return(
<div className="container">
      <div className="container">
      <div className="row  justify-content-center">
        <div class="col-md-5">
      <div className="align-items-center justify-content-center">
       <div className={` ${stylesFor.containerSignup} d-flex  align-items-center justify-content-center`}>
         <form onSubmit={this.handleSubmit} className="login-form text-center">
           <h1 className="mb-5 font-weight-light text-uppercase">Sign Up</h1>
           <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`} placeholder="First Name"
            id="firstName" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`} placeholder="Second Name"
            id="secondName" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="email" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`} placeholder="Email"
            id="email" onChange={this.handleChange} />
          </div>
           <div className="form-group">
            <input type="text" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`} placeholder="Password"
            onChange={this.handleChange}
            id="password" />
          </div>
          <button type="submit" className="btn mt-4 btn-dark btn-block text-uppercase rounded-pill btn-lg">Sign Up</button>
          <p className="mt-3 font-weight-normal">
     {authError ? <p>{authError}</p> : null}
          </p>
        </form>
       </div>
      </div>
      </div>
      </div>
      </div>
    </div>
     );
   }

}

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

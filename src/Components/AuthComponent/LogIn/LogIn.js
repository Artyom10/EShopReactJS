import React from 'react';
import stylesFor from './LogIn.module.css';
import { connect } from 'react-redux';
import {signIn} from '../../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';

class LogIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);

  }

  render(){
    const {authError, auth} = this.props;
    if(auth.uid) return <Redirect to='/'/>
    debugger;
    return(
<div className="container">
      <div className="row  justify-content-center">
        <div class="col-md-5">
      <div className="align-items-center">
       <div className={`${stylesFor.loginContainer} d-flex  align-items-center justify-content-center`}>
         <form onSubmit={this.handleSubmit} className={`${stylesFor.loginForm} text-center`}>
           <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
           <div className="form-group">
             <input type="email" class={`form-control rounded-pill form-control-lg
              ${stylesFor.control}`}
              placeholder="Email" onChange={this.handleChange} id="email"/>
           </div>
           <div className="form-group">
            <input type="password" className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
            placeholder="Password" onChange={this.handleChange} id="password" />
          </div>
          <button type="submit" className="btn mt-4 btn-dark btn-block text-uppercase rounded-pill btn-lg">Login</button>
          <div className="text-align-center">
    {authError ? <p>{authError}</p> : null}
          </div>
        </form>
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

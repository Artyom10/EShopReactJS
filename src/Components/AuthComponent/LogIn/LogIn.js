import React, { useState } from "react";
import stylesFor from "./LogIn.module.css";
import { Redirect } from "react-router-dom";

const LogIn = (props) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.target.id === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn({ email, password });
  };

  const { authError, auth } = props;
  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-5">
          <div className="align-items-center">
            <div
              className={`${stylesFor.loginContainer} d-flex  align-items-center justify-content-center`}
            >
              <form
                onSubmit={handleSubmit}
                className={`${stylesFor.loginForm} text-center`}
              >
                <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
                <div className="form-group">
                  <input
                    type="email"
                    className={`form-control rounded-pill form-control-lg
              ${stylesFor.control}`}
                    placeholder="Email"
                    onChange={handleChange}
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                    placeholder="Password"
                    onChange={handleChange}
                    id="password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn mt-4 btn-dark btn-block text-uppercase rounded-pill btn-lg"
                >
                  Login
                </button>
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
};

export default LogIn;
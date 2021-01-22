import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import stylesFor from "./SignUp.module.css";
import  signUpSchema  from '../../../validation/signUpSchema';
import { useFormik } from "formik";


const SignUp = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      props.signUp(values);
    },
  });

  const { auth, authError } = props;
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-md-5">
            <div className="align-items-center justify-content-center">
              <div
                className={` ${stylesFor.containerSignup} d-flex  align-items-center justify-content-center`}
              >
                <form
                  onSubmit={formik.handleSubmit}
                  className="login-form text-center"
                >
                  <h1 className="mb-5 font-weight-light text-uppercase">
                    Sign Up
                  </h1>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                      value={formik.values.firstName}
                      name="firstName"
                      id="firstName"
                      onChange={formik.handleChange}
                      placeholder="First Name"
                    />
                    {formik.errors.firstName && <p className={stylesFor.emergency}>{formik.errors.firstName}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                      value={formik.values.secondName}
                      name="secondName"
                      id="secondName"
                      onChange={formik.handleChange}
                      placeholder="Second Name"
                    />
                    {formik.errors.secondName && <p className={stylesFor.emergency}>{formik.errors.secondName}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                      value={formik.values.email}
                      name="email"
                      id="email"
                      onChange={formik.handleChange}
                      placeholder="Email"
                    />
                    {formik.errors.email && <p className={stylesFor.emergency}>{formik.errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                      value={formik.values.password}
                      name="password"
                      onChange={formik.handleChange}
                      id="password"
                      placeholder="Password"
                    />
                    {formik.errors.password && <p className={stylesFor.emergency}>{formik.errors.password}</p>}
                  </div>
                  <button
                    type="submit"
                    className="btn mt-4 btn-dark btn-block text-uppercase rounded-pill btn-lg"
                  >
                    Sign Up
                  </button>
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
};

export default SignUp;

import React, { useState } from "react";
import stylesFor from "./LogIn.module.css";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import  logInSchema  from '../../../validation/logInSchema';

const LogInFormik = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: logInSchema,
        onSubmit: values => {
           props.signIn(values);
        }
    });

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
                onSubmit={formik.handleSubmit}
                className={`${stylesFor.loginForm} text-center`}
              >
                <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
                <div className="form-group">
                  <input
                    type="email"
                    className={`form-control rounded-pill form-control-lg
              ${stylesFor.control}`}
                    onChange={formik.handleChange}
                    id="email"
                    name="email"
                    value={formik.values.email}
                  />
                   {formik.errors.email && <p className={stylesFor.emergency}>{formik.errors.email}</p>}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                    onChange={formik.handleChange}
                    id="password"
                    name="password"
                    value={formik.values.password}
                  />
                   {formik.errors.password && <p className={stylesFor.emergency}>{formik.errors.password}</p>}
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

export default LogInFormik;
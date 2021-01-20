import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import stylesFor from "./SignUp.module.css";
import  signUpSchema  from '../../../validation/signUpSchema';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { signUp } from "../../../redux/actions/authActions";

const SignUp = (props) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [secondName, setSecondName] = useState("");
  let [request, setRequest] = useState(false);
  let [bags, setBags] = useState(null);
  let [valuedProducts, setValuedProducts] = useState([]);

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.id === "secondName") {
      setSecondName(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let ourState = {
      email,
      password,
      firstName,
      secondName,
      request,
      bags,
      valuedProducts,
    };
    props.signUp(ourState);
  };

  /*const auth = useSelector((state) => state.firebase.auth);
  const authError = useSelector((state) => state.auth.authError);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      email: "",
      password: "",

    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(signUp(values));
    },
  });*/

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
                  onSubmit={handleSubmit}
                  className="login-form text-center"
                >
                  <h1 className="mb-5 font-weight-light text-uppercase">
                    Sign Up
                  </h1>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                      placeholder="First Name"
                      id="firstName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                      placeholder="Second Name"
                      id="secondName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={`form-control rounded-pill form-control-lg ${stylesFor.control}`}
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
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

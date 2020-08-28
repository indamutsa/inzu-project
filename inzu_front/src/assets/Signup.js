import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { setAlert } from "../actions/alert";
import { signup } from "../actions/auth";
import PropTypes from "prop-types";
import { Container, Modal } from "reactstrap";
import Alert from "./Alert";

import { useSelector, useDispatch } from "react-redux";
import { setVisibleLogin, setVisibleSignup } from "../actions/modal";

const SignUp = ({ setAlert, signup, isAuthenticated, state }) => {
  const modalStatus = useSelector((state) => state.modalStatus);
  const { signupStatus } = modalStatus;

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) setAlert("Passwords do not match", "error");
    else signup({ name, email, password, password2 });
  };

  const showLoginModal = () => {
    dispatch(setVisibleSignup(false));
    dispatch(setVisibleLogin(true));
  };
  const dismissSignupModal = () => {
    dispatch(setVisibleLogin(false));
    dispatch(setVisibleSignup(false));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Helmet>
        <title>Inzu Estates - Sign Up</title>
        <meta name="description" content="sign up page" />
      </Helmet>
      <Modal isOpen={signupStatus} style={{ marginTop: "5%" }}>
        <form
          className="login100-form validate-form p-l-55 p-r-55 p-t-178"
          onSubmit={(e) => onSubmit(e)}
        >
          <span className="login100-form-title">
            Create your Account{" "}
            <i
              className="fa fa-window-close float-right mr-5"
              aria-hidden="true"
              onClick={() => dismissSignupModal()}
            />
          </span>
          <div
            className="wrap-input100 validate-input m-b-16"
            data-validate="Please enter your name"
          >
            <input
              className="input100"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
            <span className="focus-input100" />
          </div>
          <div
            className="wrap-input100 validate-input m-b-16"
            data-validate="Please enter your email"
          >
            <input
              className="input100"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <span className="focus-input100" />
          </div>
          <div
            className="wrap-input100 validate-input mb-3"
            data-validate="Please enter password"
          >
            <input
              className="input100"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
            <span className="focus-input100" />
          </div>{" "}
          <div
            className="wrap-input100 validate-input mb-3"
            data-validate="Please enter password"
          >
            <input
              className="input100"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
            <span className="focus-input100" />
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn">Register</button>
          </div>
          <Alert />
          <div className="flex-col-c p-t-170 p-b-40">
            <span className="txt1 p-b-9">Already have an account?</span>
            <Link to="/" className="txt3" onClick={() => showLoginModal()}>
              Sign in
            </Link>
          </div>
        </form>
      </Modal>
    </Container>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp);

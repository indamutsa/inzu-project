import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import Alert from "./Alert";

import { Container, Modal } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { setVisibleLogin, setVisibleSignup } from "../actions/modal";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const modalStatus = useSelector((state) => state.modalStatus);
  const { loginStatus } = modalStatus;
  console.log(modalStatus, "rtyuioprtyuio");
  const dispatch = useDispatch();

  const dismissLoginModal = () => dispatch(setVisibleLogin(false));
  const showSignupModal = () => {
    dismissLoginModal();
    dispatch(setVisibleSignup(true));
  };

  if (isAuthenticated) return <Redirect to="/" />;

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <Container>
      <Helmet>
        <title>Inzu Estates - Login</title>
        <meta name="description" content="login page" />
      </Helmet>

      <Modal isOpen={loginStatus} style={{ marginTop: "5%" }}>
        <form
          className="login100-form validate-form p-l-55 p-r-55 p-t-178"
          onSubmit={(e) => onSubmit(e)}
        >
          <span className="login100-form-title">
            Sign In{" "}
            <i
              className="fa fa-window-close float-right mr-5"
              aria-hidden="true"
              onClick={() => dismissLoginModal()}
            />
          </span>
          <div
            className="wrap-input100 validate-input m-b-16"
            data-validate="Please enter username"
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
            className="wrap-input100 validate-input"
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
          </div>
          <div className="text-right p-t-13 p-b-23">
            <span className="txt1">Forgot</span>
            <a href="#" className="txt2">
              Username / Password?
            </a>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn">Sign in</button>
          </div>
          <Alert />
          <div className="flex-col-c p-t-170 p-b-40">
            <span className="txt1 p-b-9">Don’t have an account?</span>
            <Link to="/" className="txt3" onClick={() => showSignupModal()}>
              Sign up now
            </Link>
          </div>
        </form>
      </Modal>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

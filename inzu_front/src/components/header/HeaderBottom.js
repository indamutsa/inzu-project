import React, { useState, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";
import Alert from "../Alert";

import Logo from "../../assets/images/logo-inzu.png";
import Login from "../../containers/Login";
import Signup from "../../containers/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#7ac143",
    marginBottom: "0.5em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const HeaderBottom = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const logoutUser = () => {
    logout();
  };

  const authLinks = (
    <li className="nav-item">
      <NavLink
        className="nav-link text-white"
        to="/"
        onClick={() => logoutUser()}
      >
        Logout <i className="fas fa-user" />
      </NavLink>
    </li>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item ml-5">
        <NavLink className="nav-link text-white" to="/signup">
          Register <i className="fa fa-user-plus" aria-hidden="true" />
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/login">
          Sign in <i className="fas fa-user" />
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className="top-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="text-uppercase" to="/">
                  <img
                    style={{
                      width: "111.5px",
                      height: "65px",
                      border: "none",
                    }}
                    src={Logo}
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center pr-md-4"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link active text-white" to="/">
                        Home <span className="sr-only">(current)</span>
                        <i className="fa fa-home" aria-hidden="true" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/about">
                        About <i className="fas fa-address-card" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/services">
                        Services <i className="fas fa-briefcase" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-white" to="/properties">
                        Properties <i className="fas fa-list" />
                      </NavLink>
                    </li>
                    {/* <li className="dropdown nav-item">
                      <NavLink
                        to="/#"
                        className="dropdown-toggle nav-link text-white"
                        data-toggle="dropdown"
                      >
                        Pages
                        <b className="caret" />
                      </NavLink>
                      <ul className="dropdown-menu agile_short_dropdown  text-white">
                        <li>
                          <NavLink to="/single">Single Page</NavLink>
                        </li>
                        <li>
                          <NavLink to="/history">History</NavLink>
                        </li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <NavLink
                        className="nav-link text-white mr-3"
                        to="/contact"
                      >
                        Contact <i className="fa fa-check-circle" />
                      </NavLink>
                    </li>

                    {!loading && (
                      <Fragment>
                        {isAuthenticated ? authLinks : guestLinks}
                      </Fragment>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

HeaderBottom.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderBottom);

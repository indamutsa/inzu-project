import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from "./Alert";
import PropTypes from "prop-types";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <div>
      {/* Navigation */}
      <header>
        <div className="top-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand text-uppercase" href="index.html">
                Estate Land <i className="fas fa-building" />
                <span>Real Property</span>
              </a>
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
                    {/* <a className="nav-link active" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a> */}
                    <NavLink to="/" className="nav-link active">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="about.html">
                      About
                    </a> */}
                    <NavLink to="/about" className="nav-link">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="services.html">
                      Services
                    </a> */}
                    <NavLink to="/services" className="nav-link">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="property.html">
                      Properties
                    </a> */}
                    <NavLink to="/properties" className="nav-link">
                      Properties
                    </NavLink>
                  </li>
                  <li className="dropdown nav-item">
                    <NavLink
                      to=""
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                    >
                      Pages
                      <b className="caret" />
                    </NavLink>

                    <ul className="dropdown-menu agile_short_dropdown">
                      <li>
                        {/* <a href="single.html">Single Page</a> */}
                        <NavLink to="/single">Single Page</NavLink>
                      </li>
                      <li>
                        {/* <a href="history.html">History</a> */}
                        <NavLink to="/history">History</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="contact.html">
                      Contact
                    </a> */}
                    <NavLink to="/contact" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* //Navigation */}
    </div>
  );
};

navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(navbar);

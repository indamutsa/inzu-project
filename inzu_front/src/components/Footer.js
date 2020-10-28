import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* footer */}
        <section className="agile-footer w3ls-section py-5">
          <div className="container">
            <div className="list-footer">
              <ul className="footer-nav text-center">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/properties">Properties</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="agileits_w3layouts-footer-bottom">
              <div className="row w3_agile-footer-grids py-5 my-4">
                <div className="col-lg-3 w3_agile-footer1 f1">
                  <h2 className="mb-3">
                    <NavLink to="/">Inzu Estates</NavLink>
                  </h2>
                  <p>
                    We are here to find a suitable home and comfortable home for
                    you at the place of your choice
                  </p>
                </div>
                <div className="col-lg-7 col-md-9 mt-lg-0 mt-4 row w3_agile-footer1 f2">
                  <div className="col-md-4 col-sm-4 mb-sm-0 mb-4 inner-li">
                    <h5 className="mb-3">Partners</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <NavLink className="page-scroll scroll" to="/#about">
                          Estate Group
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="page-scroll scroll" to="/#pricing">
                          Developers
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="page-scroll scroll" to="/#gallery">
                          Builders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="page-scroll scroll" to="/#gallery">
                          Constructors
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 mb-sm-0 mb-4 inner-li">
                    <h5 className="mb-3">About us</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <NavLink to="/history">History</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#">Terms of use</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#">Privacy policy</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 inner-li">
                    <h5 className="mb-3">support</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <NavLink to="/#">24/7 service</NavLink>
                      </li>
                      <li>
                        <NavLink to="/#">FAQ</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 mt-lg-0 mt-4 w3_agile-footer1 f3">
                  <h5 className="mb-3">Need Help?</h5>
                  <ul className="footer-social-icons">
                    <li>
                      <NavLink to="/contact">Contact us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/#">knowledge base</NavLink>
                    </li>
                    <li>
                      <NavLink to="/#">Pdf document</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="agileits_w3layouts-copyright text-center">
              <p>
                © {new Date().getFullYear()} Inzu Estates. All Rights Reserved
              </p>
            </div>
          </div>
        </section>
        {/* /footer */}
      </div>
    );
  }
}

export default Footer;

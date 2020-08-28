import React, { Component } from "react";

export class Listing extends Component {
  render() {
    return (
      <div>
        {/*property-container */}
        <section className="property">
          <div className="container-fluid">
            <div className="row agile-team-grids">
              <div className="col-lg-3 col-sm-6 mb-lg-0 mb-5 team-grid">
                <div className="team-img">
                  <img src="images/p1.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <a href="single.html">Know More</a>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-building" aria-hidden="true" />
                      550 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 5
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Property Value <span>$950</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-lg-0 mb-5 team-grid">
                <div className="team-img">
                  <img src="images/p2.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <a href="single.html">Know More</a>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-home" aria-hidden="true" />
                      600 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 5
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Property Value <span>$840</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-sm-0 mb-5 team-grid">
                <div className="team-img">
                  <img src="images/p2.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <a href="single.html">Know More</a>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-home" aria-hidden="true" />
                      600 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 5
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Property Value <span>$735</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 team-grid">
                <div className="team-img">
                  <img src="images/p4.jpg" className="img-responsive" alt=" " />
                  <figcaption className="overlay">
                    <a href="single.html">Know More</a>
                  </figcaption>
                </div>
                <div className="prop-info-w3ls">
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-home" aria-hidden="true" /> 720 Sqft
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fa fa-bed" aria-hidden="true" /> 4
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-bath" aria-hidden="true" /> 2
                    </p>
                  </div>
                  <div className="both-w3-agileits">
                    <p>
                      <i className="fas fa-car" aria-hidden="true" /> 3
                    </p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="prop-btm-w3ls">
                  <h4>
                    Property Value <span>$735</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //property */}
      </div>
    );
  }
}

export default Listing;

import React, { Component } from "react";

export class History extends Component {
  render() {
    return (
      <div>
        {/* inner page banner */}
        <section className="innerpage_banner py-5">
          <div className="dot1"></div>
        </section>
        {/* //inner page banner */}
        {/*/history*/}
        {/* about */}
        <section className="about py-5 my-md-5">
          <div className="container">
            <div className="row about_grids">
              <div className="col-lg-5 mb-lg-0 mb-5 left-grid">
                <div className="heading">
                  <h3 className="heading text-uppercase mb-5 pb-3">
                    <span>About</span> us{" "}
                  </h3>
                  <h4 className="position">HISTORY</h4>
                </div>
                <p className="mb-4">
                  {" "}
                  Etiam facilisis odio sit amet finibus sollicitudin. Nulla et
                  augue eu ipsum efficitur venenatis. Nam vitae viverra turpis.
                  Donec ipsum dolor, lacinia eget aliquam eget, ultricies a
                  tortor. Cras ultrices, purus nec dignissim faucibus, enim erat
                  sagittis felis, rutrum.
                </p>
                <img
                  src="images/certificate.png"
                  alt=""
                  className="img-fluid"
                />{" "}
                <strong>Certified Company</strong>
              </div>
              <div className="col-lg-7 right-grid">
                <div className="row right_inner_grids">
                  <div className="col-sm-6 icon1">
                    <span className="fas fa-users" />
                    <h4 className="text-uppercase my-3">Professionals</h4>
                    <p className="mb-4">
                      {" "}
                      Etiam facilisis odio sit amet finibus sollicitudin. Nulla
                      et augue eu ipsum efficitur venenatis.
                    </p>
                  </div>
                  <div className="col-sm-6 icon2">
                    <span className="fas fa-briefcase" />
                    <h4 className="text-uppercase my-3">Business owners </h4>
                    <p className="mb-4">
                      {" "}
                      Etiam facilisis odio sit amet finibus sollicitudin. Nulla
                      et augue eu ipsum efficitur venenatis.
                    </p>
                  </div>
                  <div className="col-sm-6 icon3 mb-sm-0 mb-3">
                    <span className="fab fa-servicestack" />
                    <h4 className="text-uppercase my-3">Superior Service </h4>
                    <p className>
                      {" "}
                      Etiam facilisis odio sit amet finibus sollicitudin. Nulla
                      et augue eu ipsum efficitur venenatis.
                    </p>
                  </div>
                  <div className="col-sm-6 icon4">
                    <span className="fas fa-money-bill-alt" />
                    <h4 className="text-uppercase my-3">Cash &amp; Credit </h4>
                    <p className>
                      {" "}
                      Etiam facilisis odio sit amet finibus sollicitudin. Nulla
                      et augue eu ipsum efficitur venenatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //about */}
        {/*//history*/}
      </div>
    );
  }
}

export default History;

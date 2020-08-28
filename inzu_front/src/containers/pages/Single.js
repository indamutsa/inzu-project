import React, { Component } from "react";

export class Single extends Component {
  render() {
    return (
      <div>
        {/* inner page banner */}
        <section className="innerpage_banner py-5">
          <div className="dot1"></div>
        </section>
        {/* //inner page banner */}
        {/*/single*/}
        <div className="banner_bottom read_page py-5 my-md-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-uppercase mb-5 pb-3">
                <span>Property</span> Description
              </h1>
              <h4 className="position cont">DESCRIPTION</h4>
            </div>
            <div className="inner_sec_info_agile_w3_info">
              <div className="read_img">
                <img src="images/6.jpg" alt=" " className="img-responsive" />
                <ul className="property-info mt-4">
                  <li>
                    <span className="fas fa-building" /> 4600sqft
                  </li>
                  <li>
                    <span className="fas fa-bed" /> 2 Bedrooms
                  </li>
                  <li>
                    <span className="fas fa-bath" /> 2 Bathrooms
                  </li>
                  <li>
                    <span className="fas fa-car" /> 1 Car parking
                  </li>
                </ul>
                <p className="para mt-2">
                  <span className="fas fa-map-marker-alt" />
                  <strong>Address : </strong> Escada Apartments, San Diego, CA
                  92101
                </p>
                <p className="read_para">
                  In consectetur, elit in scelerisque malesuada, tellus leo
                  viverra massa, nec malesuada turpis lectus ac urna.
                  Suspendisse ut neque orci. dapibus nibh convallis, semper
                  augue.
                  <i>
                    Nunc a urna turpis. Aenean vestibulum elementum nisi. Aenean
                    aliquet nec mi et lacinia. Aliquam maximus iaculis mi elit
                    in scelerisque malesuada, tellus leo viverra massa, sed
                    efficitur orci efficitur nec.
                  </i>{" "}
                  In consectetur, elit in scelerisque malesuada, tellus leo
                  viverra massa, nec malesuada turpis lectus ac urna.
                  Suspendisse ut neque orci. Phasellus tellus diam, pulvinar sit
                  amet elit sit amet, fermentum viverra eros. Praesent neque
                  purus, rhoncus nec nibh non, mollis sodales odio.
                </p>
              </div>
              <div className="ab_button">
                <a
                  className="btn btn-primary btn-lg"
                  href="contact.html"
                  role="button"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*//single*/}
      </div>
    );
  }
}

export default Single;

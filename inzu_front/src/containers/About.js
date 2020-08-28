import React from "react";

const About = () => {
  return (
    <div>
      {/* Navigation */}

      {/* //Navigation */}
      {/* inner page banner */}
      <section className="innerpage_banner py-5">
        <div className="dot1"></div>
      </section>
      {/* //inner page banner */}
      {/* about properties */}
      <section className="banner_bottom py-5">
        <div className="container">
          <div className="heading">
            <h2 className="heading text-capitalize mb-5 pb-5">
              <span>About</span> Our Properties
            </h2>
            <h4 className="position cont">PROPERTIES</h4>
          </div>
          <div className="inner_sec_info_agile_w3_info">
            <div className="help_full">
              {/* ---------------------------------------------- */}
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="respon_info_img">
                      <img
                        src={require("../assets/images/1.jpg")}
                        className="img-responsive"
                        alt="Estate Land"
                      />
                    </div>
                    <div className="banner_bottom_left">
                      <h4 className="my-3 text-capitalize">
                        {" "}
                        Property value - 215$
                      </h4>
                      <ul className="property-info mb-3">
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
                      <p>
                        Maecenas quis neque libero. Class aptent taciti. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque convallis diam consequat magna vulputate
                        malesuada. Cras a ornare elit. Nulla viverra pharetra
                        sem, eget pulvinar neque pharetra ac.
                      </p>
                      <div className="ab_button">
                        <a
                          className="btn btn-primary btn-lg hvr-underline-from-left"
                          href="single.html"
                          role="button"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="respon_info_img">
                      <img
                        src={require("../assets/images/6.jpg")}
                        className="img-responsive"
                        alt="Estate Land"
                      />
                    </div>
                    <div className="banner_bottom_left">
                      <h4 className="my-3 text-capitalize">
                        {" "}
                        Property value - 215$
                      </h4>
                      <ul className="property-info mb-3">
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
                      <p>
                        Maecenas quis neque libero. Class aptent taciti. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque convallis diam consequat magna vulputate
                        malesuada. Cras a ornare elit. Nulla viverra pharetra
                        sem, eget pulvinar neque pharetra ac.
                      </p>
                      <div className="ab_button">
                        <a
                          className="btn btn-primary btn-lg hvr-underline-from-left"
                          href="single.html"
                          role="button"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="respon_info_img">
                      <img
                        src={require("../assets/images/5.jpg")}
                        className="img-responsive"
                        alt="Estate Land"
                      />
                    </div>
                    <div className="banner_bottom_left">
                      <h4 className="my-3 text-capitalize">
                        {" "}
                        Property value - 215$
                      </h4>
                      <ul className="property-info mb-3">
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
                      <p>
                        Maecenas quis neque libero. Class aptent taciti.Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque convallis diam consequat magna vulputate
                        malesuada. Cras a ornare elit. Nulla viverra pharetra
                        sem, eget pulvinar neque pharetra ac.
                      </p>
                      <div className="ab_button">
                        <a
                          className="btn btn-primary btn-lg hvr-underline-from-left"
                          href="single.html"
                          role="button"
                        >
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleFade"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleFade"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* house plan */}
        <section className="plan py-5">
          <div className="container-fluid">
            <div className="row plan-grids">
              <div className="col-lg-6 plan-left">
                <img
                  src={require("../assets/images/plan.jpg")}
                  alt="plan"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 plan-right p-sm-5 px-4 pt-4 pb-0">
                <h3 className="floor mb-3 pb-3">Certified floor plans</h3>
                <p>
                  Maecenas quis neque libero. Class aptent taciti. Lorem ipsum
                  dolor sit amet, elit consectetur elit. Pellentesque convallis
                  diam consequat magna vulputate malesuada. Cras a ornare elit.
                  Nulla ipsum dolor sit.
                </p>
                <div className="ab_button">
                  <a
                    className="btn btn-primary btn-lg hvr-underline-from-left"
                    href="#"
                    role="button"
                  >
                    Learn More{" "}
                  </a>
                </div>
                <div className="row mt-5 w3layouts_statistics_grid_right">
                  <div className="col-sm-3 col-6 w3_stats_grid">
                    <h3 id="w3l_stats1" className="odometer">
                      0
                    </h3>
                    <p className="mt-2">Locations</p>
                  </div>
                  <div className="col-sm-3 col-6 w3_stats_grid">
                    <h3 id="w3l_stats2" className="odometer">
                      0
                    </h3>
                    <p className="mt-2">Properties</p>
                  </div>
                  <div className="col-sm-3 col-6 w3_stats_grid">
                    <h3 id="w3l_stats3" className="odometer">
                      0
                    </h3>
                    <p className="mt-2">Constructions</p>
                  </div>
                  <div className="col-sm-3 col-6 w3_stats_grid">
                    <h3 id="w3l_stats4" className="odometer">
                      0
                    </h3>
                    <p className="mt-2">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //house plan */}
        {/* pricing section */}
        <section className="pricing py-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-capitalize mb-5 pb-3">
                <span>Pricing</span> Packages
              </h1>
              <h4 className="position cont">PRICING</h4>
            </div>
            <div className="row pricing_grids pt-5">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5 price-grid">
                <div className="price-block p-sm-5 px-3 py-5 agile">
                  <div className="price-gd-top pric-clr1">
                    <i className="fas fa-building" aria-hidden="true" />
                    <h4>Basic</h4>
                    <p>Consectetur adipiscing elit. Vivamus ut lacus</p>
                    <h3>
                      <span>$</span>22
                    </h3>
                    <h5>Localization Features, Adding Policy</h5>
                  </div>
                  <div className="price-gd-bottom">
                    <div className="price-list">
                      <ul>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star-half" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="far fa-star" aria-hidden="true" />
                        </li>
                      </ul>
                    </div>
                    <div className="price-selet pric-sclr1">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-md-0 mb-5 price-grid ">
                <div className="price-block  p-sm-5 px-3 py-5 price-block1 agile">
                  <div className="price-gd-top pric-clr2">
                    <i className="fas fa-building" aria-hidden="true" />
                    <h4>Pro</h4>
                    <p>Consectetur adipiscing elit. Vivamus ut lacus</p>
                    <h3>
                      <span>$</span>72
                    </h3>
                    <h5>Core Multi Live Exchange Rates, dual pro</h5>
                  </div>
                  <div className="price-gd-bottom">
                    <div className="price-list">
                      <ul>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="far fa-star" aria-hidden="true" />
                        </li>
                      </ul>
                    </div>
                    <div className="price-selet pric-sclr2">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 price-grid lost">
                <div className="price-block  p-sm-5 px-3 py-5  price-block2 agile">
                  <div className="price-gd-top pric-clr3">
                    <i className="fas fa-building" aria-hidden="true" />
                    <h4>High</h4>
                    <p>Consectetur adipiscing elit. Vivamus ut lacus</p>
                    <h3>
                      <span>$</span>126
                    </h3>
                    <h5>Adapting Types &amp; Multi premium core</h5>
                  </div>
                  <div className="price-gd-bottom">
                    <div className="price-list">
                      <ul>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true" />
                        </li>
                      </ul>
                    </div>
                    <div className="price-selet pric-sclr3">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //pricing section */}
      </div>
    </div>
  );
};

export default About;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Service = () => {
  return (
    <div>
      <div>
        {/* inner page banner */}
        <section className="innerpage_banner py-5">
          <div className="dot1"></div>
        </section>
        {/* //inner page banner */}
        {/* services */}
        <section className="services py-5 my-lg-5">
          <div className="container">
            <div className="heading">
              <h3 className="heading text-uppercase mb-5 pb-3">
                <span>Quality</span> Services{" "}
              </h3>
              <h4 className="position cont">SERVICES</h4>
            </div>
            <div className="row service-grids">
              <div className="col-md-4 mb-md-0 mb-5 service-grid1">
                <span className="fas fa-cloud-download-alt" />
                <h3 className="text-uppercase my-4">
                  Nulla etaugue eu ipsum elit efficitur.
                </h3>
                <p className="mb-4">
                  {" "}
                  Etiam facilisis odio sit amet finibus sollicitudin. Nulla et
                  augue eu ipsum efficitur venenatis. Nam vitae viverra turpis.
                  Donec ipsum dolor, lacinia eget aliquam eget, ultricies a
                  tortor. Cras ultrices, purus nec dignissim faucibus, enim erat
                  sagittis felis, rutrum.
                </p>
                <a href="#"> Read more </a>
              </div>
              <div className="col-md-4 mb-md-0 mb-5 service-grid1">
                <span className="fas fa-clone" />
                <h3 className="text-uppercase my-4">
                  Nulla etaugue eu ipsum elit efficitur.
                </h3>
                <p className="mb-4">
                  {" "}
                  Etiam facilisis odio sit amet finibus sollicitudin. Nulla et
                  augue eu ipsum efficitur venenatis. Nam vitae viverra turpis.
                  Donec ipsum dolor, lacinia eget aliquam eget, ultricies a
                  tortor. Cras ultrices, purus nec dignissim faucibus, enim erat
                  sagittis felis, rutrum.
                </p>
                <a href="#"> Read more </a>
              </div>
              <div className="col-md-4 service-grid1">
                <span className="fab fa-centercode" />
                <h3 className="text-uppercase my-4">
                  Nulla etaugue eu ipsum elit efficitur.
                </h3>
                <p className="mb-4">
                  {" "}
                  Etiam facilisis odio sit amet finibus sollicitudin. Nulla et
                  augue eu ipsum efficitur venenatis. Nam vitae viverra turpis.
                  Donec ipsum dolor, lacinia eget aliquam eget, ultricies a
                  tortor. Cras ultrices, purus nec dignissim faucibus, enim erat
                  sagittis felis, rutrum.
                </p>
                <a href="#"> Read more </a>
              </div>
            </div>
          </div>
        </section>
        {/* services */}
        {/* testimonals section */}
        <div className="testimonials py-5">
          <div className="container">
            <div className="heading">
              <h3 className="heading text-uppercase mb-5 pb-3">
                <span>Clients</span> Reviews{" "}
              </h3>
              <h4 className="position cont">REVIEWS</h4>
            </div>
            <div className="agileits-feedback-grids">
              <OwlCarousel
                id="owl-demo"
                className="owl-theme"
                loop
                margin={1}
                // nav
              >
                {" "}
                <div className="item">
                  <div className="test-review">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      Polite sadipscing elitr, sed diam is nonumy is eirmod
                      tempor invidunt ut labore et dolore magna aliquyam
                    </p>
                    <div className="img-agile my-3">
                      <img
                        src={require("../assets/images/t1.jpg")}
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Rita</h5>
                      <p>Sadipscing</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="test-review">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      Polite sadipscing elitr, sed diam is nonumy is eirmod
                      tempor invidunt ut labore et dolore magna aliquyam
                    </p>{" "}
                    <div className="img-agile my-3">
                      <img
                        src={require("../assets/images/t2.jpg")}
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Williams</h5>
                      <p>Sadipscing</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="test-review">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      Polite sadipscing elitr, sed diam is nonumy is eirmod
                      tempor invidunt ut labore et dolore magna aliquyam{" "}
                    </p>
                    <div className="img-agile my-3">
                      <img
                        src={require("../assets/images/t3.jpg")}
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Laila</h5>
                      <p>Sadipscing</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="test-review">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      Polite sadipscing elitr, sed diam is nonumy is eirmod
                      tempor invidunt ut labore et dolore magna aliquyam
                    </p>
                    <div className="img-agile my-3">
                      <img
                        src={require("../assets/images/t4.jpg")}
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Stella</h5>
                      <p>Sadipscing</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="test-review">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      Polite sadipscing elitr, sed diam is nonumy is eirmod
                      tempor invidunt ut labore et dolore magna aliquyam
                    </p>
                    <div className="img-agile my-3">
                      <img
                        src={require("../assets/images/t1.jpg")}
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Rick</h5>
                      <p>Sadipscing</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="test-review">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                    <p>
                      Polite sadipscing elitr, sed diam is nonumy is eirmod
                      tempor invidunt ut labore et dolore magna aliquyam
                    </p>
                    <div className="img-agile my-3">
                      <img
                        src={require("../assets/images/t2.jpg")}
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>Richard</h5>
                      <p>Sadipscing</p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
        {/* /testimonals section */}

        {/* team */}
        <section className="team py-5 my-md-5 my-3">
          <div className="container">
            <div className="heading">
              <h3 className="heading text-uppercase mb-5 pb-3">
                <span>Quality</span> Team{" "}
              </h3>
              <h4 className="position cont">TEAM</h4>
            </div>
            <div className="row text-center">
              <div className=" col-md-3 col-sm-6 col-6 mb-md-0 mb-5 profile">
                <div className="img-box">
                  <img src={require("../assets/images/t1.jpg")} alt="" />
                  <ul className="text-center">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="mt-3">Eliza</h4>
                <p className="mt-2">General manager</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-md-0 mb-5  profile">
                <div className="img-box">
                  <img src={require("../assets/images/t2.jpg")} alt="" />
                  <ul className="text-center">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="mt-3">Charles</h4>
                <p className="mt-2">General manager</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 profile">
                <div className="img-box">
                  <img src={require("../assets/images/t3.jpg")} alt="" />
                  <ul className="text-center">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="mt-3">Johnson</h4>
                <p className="mt-2">General manager</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 profile">
                <div className="img-box">
                  <img src={require("../assets/images/t4.jpg")} alt="" />
                  <ul className="text-center">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-rss" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="mt-3">Michael</h4>
                <p className="mt-2">General manager</p>
              </div>
            </div>
          </div>
        </section>
        {/*//team */}
        {/* /newsletter*/}
        <section className="newsletter py-5">
          <div className="container">
            <div className="newslettergrids row">
              <div className="col-md-6 mb-md-0 mb-4 newsleft">
                <h3>Sign up for Newsletter !</h3>
              </div>
              <div className="col-md-6 newsright">
                <form action="#" method="post">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    name="email"
                    required
                  />
                  <input type="submit" defaultValue="Submit" />
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* //newsletter*/}
      </div>
    </div>
  );
};

export default Service;

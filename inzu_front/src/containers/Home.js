import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SearchForm from "../components/SearchForm";
import Listings from "../components/Listings";
import Pagination from "../components/Pagination";
import MyModal from "../components/modalMore";

const Home = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(3);
  const [active, setActive] = useState(1);

  const [modalShow, setModalShow] = useState(false);
  const toggle = () => setModalShow(!modalShow);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const visitPage = (page) => {
    setCurrentPage(page);
    setActive(page);
  };

  const previous_number = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const next_number = () => {
    if (currentPage !== Math.ceil(listings.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const data = {
    modalShow,
    toggle,
    closeBtn,
  };

  return (
    <main>
      <Helmet>
        <title>Inzu Estates - Home</title>
        <meta name="description" content="Realest Estate Home Page" />
      </Helmet>
      {/*Slider*/}
      <section className="container-slide">
        <div className="outer-slide">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="slider_banner_info_w3ls">
                  {" "}
                  <h1 className="text-uppercase mb-5">
                    A new way to find close
                    <br />
                    suitable accommodations
                  </h1>
                  {/* <a
                    href="/#"
                    className="read"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    role="button"
                  >
                    Read more{" "}
                  </a> */}
                  <Link className="read" to="/#" onClick={toggle}>
                    Read more
                  </Link>
                </div>
              </div>
              <div className="col-sm" style={{ marginTop: "1rem" }}>
                <SearchForm setListings={setListings} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Listings listings={currentListings} />
      </section>
      <section className="d-flex justify-content-center">
        <div className="container mt-4">
          {listings.length !== 0 ? (
            <Pagination
              itemsPerPage={listingsPerPage}
              count={listings.length}
              visitPage={visitPage}
              previous={previous_number}
              next={next_number}
              active={active}
              setActive={setActive}
            />
          ) : null}
        </div>
      </section>

      <div className="clearfix" />
      {/*//Slider*/}
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
                Our company was founded by young enterpreneurs and professionals
                who were early graduate from european university after recognize
                challenges students encounter while doing international
                fellowships. The make-up of our group is very rich with people
                from all around the world. We work tirelessly to make sure
                services offered are the best, transparent, effective and
                punctual. Contact us to learn more.
              </p>
              <img
                src={require("../assets/images/certificate.png")}
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
                    Our company encomprises of people from different background
                    and highly professional such as engineers, teachers,
                    doctors, artists, journalists, who all work together towards
                    achieving your dream home. Learn how you can be our
                    associate below.
                  </p>
                </div>
                <div className="col-sm-6 icon2">
                  <span className="fas fa-briefcase" />
                  <h4 className="text-uppercase my-3">Business owners </h4>
                  <p className="mb-4">
                    {" "}
                    Our company is owned by various shareholders and investors
                    and we are managed by a competent board of trustees that
                    ensures professionalism and integrity into our services
                  </p>
                </div>
                <div className="col-sm-6 icon3 mb-sm-0 mb-3">
                  <span className="fab fa-servicestack" />
                  <h4 className="text-uppercase my-3">Superior Service </h4>
                  <p>
                    {" "}
                    At inzuestates, quality services are our fundamental
                    asset,so we care about it deeply!
                  </p>
                </div>
                <div className="col-sm-6 icon4">
                  <span className="fas fa-money-bill-alt" />
                  <h4 className="text-uppercase my-3">Cash &amp; Credit </h4>
                  <p>
                    {" "}
                    Our method of payments are very diverse and range from cash
                    deposit, credit cards to credit transfers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //about */}
      {/* about bottom */}
      <section className="aboutbottom py-5 text-center">
        <div className="container py-md-3">
          <h3 className="text-uppercase mb-5">
            Our Estate Land business has introduced <br />
            new technology to real estate{" "}
          </h3>
          <a href="contact.html"> Get Started </a>
        </div>
      </section>
      {/* //about bottom */}
      {/* services */}
      <section className="services py-5 my-5">
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
              <a href="/#"> Read more </a>
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
              <a href="/#"> Read more </a>
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
              <a href="/#"> Read more </a>
            </div>
          </div>
        </div>
      </section>
      {/* services */}

      <MyModal data={data} onHide={() => setModalShow(false)} />

      {/* Vertically centered Modal */}
      {/* <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-uppercase text-center"
                id="exampleModalLongTitle"
              >
                {" "}
                Estate Land
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                src="images/1.jpg"
                alt="ModalImage"
                className="img-fluid mb-3"
              />
              Vivamus eget est in odio tempor interdum. Mauris maximus fermentum
              arcu, ac finibus ante. Sed mattis risus at ipsum elementum, ut
              auctor turpis cursus. Sed sed odio pharetra, aliquet velit cursus,
              vehicula enim. Mauris porta aliquet magna, eget laoreet ligula.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* //Vertically centered Modal */}
      {/* <Listing /> */}
    </main>
  );
};

export default Home;

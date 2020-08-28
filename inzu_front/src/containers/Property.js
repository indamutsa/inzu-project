import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import Pagination from "../components/Pagination";
import CardItem from "../components/CardItem";
import Login from "../containers/Login";

const Property = () => {
  const [listings, setListings] = useState([]);
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/listings/?page=1`
        );

        setListings(res.data.results);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const displayListings = () => {
    let display = [];
    let result = [];

    let i = 0;
    listings.map((listing) => {
      return display.push(
        <CardItem
          title={listing.title}
          address={listing.address}
          city={listing.city}
          state={listing.state}
          price={listing.price}
          sale_type={listing.sale_type}
          home_type={listing.home_type}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          sqft={listing.sqft}
          photo_main={listing.photo_main}
          slug={listing.slug}
        />
      );
    });

    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <div className="container mt-4">
          <div className="d-flex justify-content-center">
            <div className=" m-3 cardhover ">{display[i]}</div>
            <div className=" m-3 cardhover">
              {display[i + 1] ? display[i + 1] : null}
            </div>
            <div className=" m-3 cardhover">
              {display[i + 2] ? display[i + 2] : null}
            </div>
          </div>
        </div>
      );
    }

    return result;
  };

  const visitPage = (page) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/listings/?page=${page}`)
      .then((res) => {
        setListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        setActive(page);
      })
      .catch((err) => {});
  };

  const previous_number = () => {
    axios
      .get(previous)
      .then((res) => {
        setListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (previous) setActive(active - 1);
      })
      .catch((err) => {});
  };

  const next_number = () => {
    axios
      .get(next)
      .then((res) => {
        setListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (next) setActive(active + 1);
      })
      .catch((err) => {});
  };

  return (
    <div>
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
            <div className="container mb-2">
              <div className="help_full">{displayListings()}</div>
            </div>
            <div className="container mt-4">
              <div className="row">
                <Pagination
                  itemsPerPage={3}
                  count={count}
                  visitPage={visitPage}
                  previous={previous_number}
                  next={next_number}
                  active={active}
                  setActive={setActive}
                />
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
                  alt=""
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
                  react-bootstrap
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
      </div>
    </div>
  );
};

export default Property;

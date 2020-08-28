import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import PropertySlider from "../components/PropertySlider";
import Photos from "../components/PropertyPhotos";

const PropertyDetail = (props) => {
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const slug = props.match.params.id;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/listings/${slug}`, config)
      .then((res) => {
        setListing(res.data);
        setPrice(numberWithCommas(res.data.price));
      })
      .catch((err) => {});
  }, [props.match.params.id]);

  useEffect(() => {
    const id = listing.realtor;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/realtors/${id}`, config)
        .then((res) => {
          setRealtor(res.data);
        })
        .catch((err) => {});
    }
  }, [listing.realtor]);

  // const displayInteriorImages = () => {
  //   let images = [];

  //   images.push(
  //     <div key={1} className="row">
  //       <div className="col-1-of-3">
  //         {listing.photo_1 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_1}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_2 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_2}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_3 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_3}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   );

  //   images.push(
  //     <div key={2} className="row">
  //       <div className="col-1-of-3">
  //         {listing.photo_4 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_4}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_5 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_5}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_6 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_6}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   );

  //   images.push(
  //     <div key={3} className="row">
  //       <div className="col-1-of-3">
  //         {listing.photo_7 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_7}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_8 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_8}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_9 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_9}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   );

  //   images.push(
  //     <div key={4} className="row">
  //       <div className="col-1-of-3">
  //         {listing.photo_10 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_10}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_12 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_11}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_12 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_12}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   );

  //   images.push(
  //     <div key={5} className="row">
  //       <div className="col-1-of-3">
  //         {listing.photo_13 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_13}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_14 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_14}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_15 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_15}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   );

  //   images.push(
  //     <div key={6} className="row">
  //       <div className="col-1-of-3">
  //         {listing.photo_16 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_16}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_17 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_17}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_18 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_18}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //     </div>
  //   );

  //   images.push(
  //     <div key={7} className="row">
  //       <div className="col-1-of-3">
  //         {listing.photo_19 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_19}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3">
  //         {listing.photo_20 ? (
  //           <div className="listingdetail__display">
  //             <img
  //               className="listingdetail__display__image"
  //               src={listing.photo_20}
  //               alt=""
  //             />
  //           </div>
  //         ) : null}
  //       </div>
  //       <div className="col-1-of-3"></div>
  //     </div>
  //   );

  //   return images;
  // };

  return (
    <div>
      <Helmet>
        <title>Realest Estate - Listing | {`${listing.title}`}</title>
        <meta name="description" content="Listing detail" />
      </Helmet>
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
          <div className="listingdetail__header mb-4">
            <h1 className="listingdetail__title">{listing.title}</h1>
            <p className="listingdetail__location">
              {listing.city}, {listing.state}, {listing.zipcode}
            </p>
          </div>
          {/* Where we start */}
          <div className="container">
            <div className="row">
              <div className="col-8">
                <PropertySlider listing={listing} />
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
                    Maecenas quis neque libero. Class aptent taciti. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Pellentesque
                    convallis diam consequat magna vulputate malesuada. Cras a
                    ornare elit. Nulla viverra pharetra sem, eget pulvinar neque
                    pharetra ac.
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
              <div className="col-4">
                {" "}
                <img
                  className="d-block w-100"
                  src={realtor.photo}
                  alt="Second slide"
                />
                <h3 className="">{realtor.name}</h3>
                <p className="">{realtor.phone}</p>
                <p className="">{realtor.email}</p>
                <p className="">{realtor.description}</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <Photos listing={listing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

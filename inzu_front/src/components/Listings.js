import React from "react";
import CardItem from "./CardItem";

const Listings = ({ listings }) => {
  const getListings = () => {
    let listingsOnPage = [];
    let result = [];

    listings.map((listing) => {
      return listingsOnPage.push(
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
            <div className=" m-3 cardhover ">{listingsOnPage[i]}</div>
            <div className=" m-3 cardhover ">
              {listingsOnPage[i + 1] ? listingsOnPage[i + 1] : null}
            </div>
            <div className=" m-3 cardhover ">
              {listingsOnPage[i + 2] ? listingsOnPage[i + 2] : null}
            </div>
          </div>
        </div>
      );
    }

    return result;
  };

  return <div>{getListings()}</div>;
};

export default Listings;

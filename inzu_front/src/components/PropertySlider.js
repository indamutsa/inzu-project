import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function PropertySlider(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log(props);
  return (
    <div className="container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: "50vh", borderRadius: "8px" }}>
          <img
            style={{ height: "100%" }}
            className="d-block w-100"
            src={props.listing.photo_main}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "50vh" }}>
          <img
            style={{ height: "100%" }}
            className="d-block w-100"
            src={props.listing.photo_1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "50vh" }}>
          <img
            style={{ height: "100%" }}
            className="d-block w-100"
            src={props.listing.photo_2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

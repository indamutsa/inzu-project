import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function PropertyPhotos(props) {
  const slides = [];

  slides.push(
    <SwiperSlide key={1}>
      <img
        src={props.listing.photo_1}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 1`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={2}>
      <img
        src={props.listing.photo_2}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 2`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={3}>
      <img
        src={props.listing.photo_3}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 3`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={4}>
      <img
        src={props.listing.photo_4}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 4`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={5}>
      <img
        src={props.listing.photo_5}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 5`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={6}>
      <img
        src={props.listing.photo_6}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 6`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={7}>
      <img
        src={props.listing.photo_7}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 7`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={8}>
      <img
        src={props.listing.photo_8}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 8`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={9}>
      <img
        src={props.listing.photo_9}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 9`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={10}>
      <img
        src={props.listing.photo_10}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 10`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={11}>
      <img
        src={props.listing.photo_11}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 11`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={12}>
      <img
        src={props.listing.photo_12}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 12`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={13}>
      <img
        src={props.listing.photo_13}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 13`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={14}>
      <img
        src={props.listing.photo_14}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 14`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={15}>
      <img
        src={props.listing.photo_15}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 15`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={16}>
      <img
        src={props.listing.photo_16}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 16`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={17}>
      <img
        src={props.listing.photo_17}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 17`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={18}>
      <img
        src={props.listing.photo_18}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 18`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={19}>
      <img
        src={props.listing.photo_19}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 18`}
      />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={20}>
      <img
        src={props.listing.photo_20}
        style={{ height: "30vh", marginTop: "2rem" }}
        alt={`Slide 20`}
      />
    </SwiperSlide>
  );

  return (
    <React.Fragment>
      <Swiper slidesPerView={3} spaceBetween={30} pagination>
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default PropertyPhotos;

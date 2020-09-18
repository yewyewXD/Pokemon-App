import React from "react";
import Slider from "react-slick";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Slider className="slider" {...settings}>
        <div className="slide slide1">
          <h3>1</h3>
        </div>
        <div className="slide slide2">
          <h3>2</h3>
        </div>
        <div className="slide slide3">
          <h3>3</h3>
        </div>
      </Slider>
    </>
  );
}

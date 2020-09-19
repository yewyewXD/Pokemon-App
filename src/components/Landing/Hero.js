import React from "react";
import Slider from "react-slick";

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <>
      <Slider className="slider" {...settings}>
        <div className="slide slide1">
          <div className="slide-overlay w-100 h-100 all-center">
            <div className="slide-caption text-white text-center">
              <h1>Gotta catch them all</h1>
              <p>In YewPokedex, we cover all pokemon under the hood</p>
              <button className="btn btn-primary btn-lg mt-4">Get them</button>
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="slide-overlay w-100 h-100 all-center">
            <div className="slide-caption text-white text-center">
              <h1>Gotta catch them all</h1>
              <p>In YewPokedex, we cover all pokemon under the hood</p>
              <button className="btn btn-primary btn-lg mt-4">Get them</button>
            </div>
          </div>
        </div>
        <div className="slide slide3">
          <div className="slide-overlay w-100 h-100 all-center">
            <div className="slide-caption text-white text-center">
              <h1>Gotta catch them all</h1>
              <p>In YewPokedex, we cover all pokemon under the hood</p>
              <button className="btn btn-primary btn-lg mt-4">Get them</button>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

// modules
import React from 'react';
import Slider from 'react-slick';
// css
import './ForecastSlider.css';
// components
import ForecastDetails from './ForecastDetails/ForecastDetails';

const ForecastSlider = () => {
  const settings = {
    dots: true,
    // appendDots: dots => (
    //     <div
    //       style={{
    //         color: "#FFF"
    //       }}
    //     >
    //     </div>
    //   ),
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 375,
      },
    ],
  };

  return (
    <div className="ForecastContainer">
      <div className="ForecastSlider">
        <Slider {...settings}>
          <div className="cardSlider">
            <div className="card1">
              <ForecastDetails />
            </div>
          </div>
          <div className="cardSlider">
            <h3>2</h3>
          </div>
          <div className="cardSlider">
            <h3>3</h3>
          </div>
          <div className="cardSlider">
            <h3>4</h3>
          </div>
          <div className="cardSlider">
            <h3>5</h3>
          </div>
          <div className="cardSlider">
            <h3>6</h3>
          </div>
          <div className="cardSlider">
            <h3>7</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ForecastSlider;

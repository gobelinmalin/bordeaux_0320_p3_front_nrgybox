// modules
import React, { useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

// components
import ForecastDetails from './ForecastDetails/ForecastDetails';

// css
import './ForecastSlider.css';

const ForecastSlider = ({ arrayAllDay, isLoading }) => {
  const [slider, setSlider] = useState(null);
  const [select, setSelect] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    beforeChange: (current, next) => setSelect(next),
    responsive: [
      {
        breakpoint: 480,
      },
    ],
  };

  // handle the select element with the onChange method
  const handleChangeSelect = (e) => {
    slider.slickGoTo(e.target.value);
  };

  // get the current day for the weekly forecast lighting
  const arrayDay =
    arrayAllDay &&
    arrayAllDay.map((day, index) => {
      const selected = index === select ? 'selected' : '';
      if (index === 0) {
        return (
          <option selected={selected} key={index} value={index}>
            Aujourd'hui
          </option>
        );
      } else {
        return (
          <option selected={selected} key={index} value={index}>
            {day.currentDay}
          </option>
        );
      }
    });

  return (
    <div className="ForecastSlider">
      <div>
        <select
          id="selectDayForecast"
          name="selectDayForecast"
          onChange={(e) => handleChangeSelect(e)}
        >
          {arrayDay}
        </select>
      </div>
      {isLoading ? (
        '...wait for it'
      ) : (
        <Slider ref={(slider) => setSlider(slider)} {...settings}>
          {arrayAllDay &&
            arrayAllDay.map((day, index) => {
              return (
                <div key={index} className="cardSlider">
                  <div className="card1">
                    <ForecastDetails day={day} />
                  </div>
                </div>
              );
            })}
        </Slider>
      )}
    </div>
  );
};

ForecastSlider.defaultProps = {
  arrayAllDay: [{}],
  isLoading: true,
};

ForecastSlider.propTypes = {
  arrayAllDay: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

export default ForecastSlider;

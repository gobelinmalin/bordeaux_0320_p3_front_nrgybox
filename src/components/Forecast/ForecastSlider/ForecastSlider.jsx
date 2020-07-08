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

  /* eslint-disable no-unused-vars */
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    swipeToSlide: false,
    beforeChange: (current, next) => setSelect(next),
    customPaging: (pagi, i) => {
      const style = {
        width: 13,
        height: 13,
        display: 'inline-block',
        backgroundColor: 'white',
        borderRadius: '50%',
      };
      return <a className="slick-dot" style={style} />;
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          // variableWidth: false,
        }
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
            Aujourd&apos;hui
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
      <div className="ContainerSelect">
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
        /* eslint-disable react/jsx-props-no-spreading */
        <div className="ContainerSliderElements">
          <Slider ref={(slider) => setSlider(slider)} {...settings}>
            {arrayAllDay &&
              arrayAllDay.map((day, index) => {
                return (
                  <div key={index} className="card-slider">
                    <div className="card1">
                      <ForecastDetails day={day} />
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
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

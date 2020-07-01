// Modules
import React from 'react';
import SemiCircleProgressBar from 'react-progressbar-semicircle';
import PropTypes from 'prop-types';

// Components
// import { ReactComponent as Heart } from '../../../../icons/heartSolid.svg';
// import { ReactComponent as Sun } from '../../../../icons/sunnyOutline.svg';
// import { ReactComponent as Moon } from '../../../../icons/moonOutline.svg';
import TimePicker2 from '../../../Assets/TimePicker2';

// CSS
import './ForecastDetails.css';

const ForecastDetails = ({ day }) => {
  return (
    <div className="ForecastDetailsContainer">
      <div className="dateWeatherContainer">
        <div className="dateFavouritContainer">
          <div className="dateForcast">
            <p>{day.date}</p>
          </div>
        </div>
        <div className="weatherContainer">
          <div className="weatherIcon">
            <img
              src={`http://openweathermap.org/img/wn/${day.iconWeather}.png`}
              alt="Weather icon"
            />
          </div>
          <div className="weatherTemperature">
            <p>{day.temp}°C</p>
          </div>
        </div>
        <div className="hrContainer">
          <hr className="hr1" />
        </div>
      </div>
      <div className="sunriseSunsetContainer">
        <div className="sunIcon">
          <img
            className="sunIcon2"
            src="https://zupimages.net/up/20/24/ra58.png"
            alt="Pictogramme du soleil"
          />
        </div>
        <div className="sunriseContainer">
          <div className="sunriseLabel">
            <p>Lever</p>
          </div>
          <div className="sunriseValue">
            <p>{day.sunrise}</p>
          </div>
        </div>
        <div className="sunsetContainer">
          <div className="sunsetLabel">
            <p>Coucher</p>
          </div>
          <div className="sunsetValue">
            <p>{day.sunset}</p>
          </div>
        </div>
      </div>
      <div className="hrContainer">
        <hr className="hr1" />
      </div>
      <div className="moonriseMoonsetContainer">
        <div className="moonIcon">
          <img
            className="moonIcon2"
            src="https://zupimages.net/up/20/24/zqh7.png"
            alt=""
          />
        </div>
        <div className="moonriseContainer">
          <div className="moonriseLabel">
            <p>Lever</p>
          </div>
          <div className="moonriseValue">
            <p>{day.moonrise}</p>
          </div>
        </div>
        <div className="moonsetContainer">
          <div className="moonsetLabel">
            <p>Coucher</p>
          </div>
          <div className="moonsetValue">
            <p>{day.moonset}</p>
          </div>
        </div>
      </div>
      <div className="hrContainer">
        <hr className="hr1" />
      </div>
      <div className="forecastLightningContainer">
        <div className="dayforecastLightningContainer">
          <div className="dayforecastLightningLabel">
            <p>Consignes éclairage</p>
          </div>
          <div className="dayforecastLightningJauge">
            <SemiCircleProgressBar
              percentage={20}
              stroke="#f2ef30"
              strokeWidth={10}
              diameter={130}
              background="#FFFF"
            />
          </div>
          <div className="dayforecastLightningHourInfo">
            <p className="hourValue">{day.startProg}</p>
            <p className="hourValue">{day.endProg}</p>
          </div>
        </div>
      </div>
      <div className="hrContainer">
        <hr className="hr1" />
      </div>
      <div className="mapHourforecastLightningContainer">
        <div className="hourForcastContainer">
          <div className="hourForcastLabel">
            <p>Voir l&apos;éclairage à</p>
            <TimePicker2 />
          </div>
          <div className="hourForcastDropDown">
            <select>hours</select>
          </div>
        </div>
        <div className="mapForcastContainer">
          <p>map here</p>
        </div>
      </div>
    </div>
  );
};

ForecastDetails.defaultProps = {
  day: {},
};

ForecastDetails.propTypes = {
  day: PropTypes.arrayOf(PropTypes.object),
};

export default ForecastDetails;

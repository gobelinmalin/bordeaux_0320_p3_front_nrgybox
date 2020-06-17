// Modules
import React from 'react';
import SemiCircleProgressBar from 'react-progressbar-semicircle';

// Components
// import { ReactComponent as Heart } from '../../../../icons/heartSolid.svg';
// import { ReactComponent as Sun } from '../../../../icons/sunnyOutline.svg';
// import { ReactComponent as Moon } from '../../../../icons/moonOutline.svg';
import TimePicker2 from '../../../Assets/TimePicker2';

// CSS
import './ForecastDetails.css';

const ForecastDetails = (props) => {
  return (
    <div className="ForecastDetailsContainer">
      <div className="dateWeatherContainer">
        <div className="dateFavouritContainer">
          <div className="dateForcast">
            <p>{props.currentDate}</p>
          </div>
        </div>
        <div className="weatherContainer">
          <div className="weatherIcon">
            <img
              // src={`http://openweathermap.org/img/wn/${iconWeather}.png`}
              src={props.iconWeather}
              alt="Weather icon"
            />
          </div>
          <div className="weatherTemperature">
            {/* {forecastWeather && (
              <p>{Math.round(props.forecastWeatherTemp)}°C</p>
            )} */}
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
            <p>Levé</p>
          </div>
          <div className="sunriseValue">
            {/* <p>{timeSunrise}</p> */}
          </div>
        </div>
        <div className="sunsetContainer">
          <div className="sunsetLabel">
            <p>Couché</p>
          </div>
          <div className="sunsetValue">
            {/* <p>{timeSunset}</p> */}
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
            <p>Levé</p>
          </div>
          <div className="moonriseValue">
            <p>{props.forecastMoon}</p>
          </div>
        </div>
        <div className="moonsetContainer">
          <div className="moonsetLabel">
            <p>Couché</p>
          </div>
          <div className="moonsetValue">
            <p>{props.forecastMoon}</p>
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
            {/* <p className="hourValue">{props.dataForecast.data && dataForecast.data[0].date_start}</p>
            <p className="hourValue">{props.dataForecast.data && dataForecast.data[0].date_end}</p> */}
          </div>
        </div>
      </div>
      <div className="hrContainer">
        <hr className="hr1" />
      </div>
      <div className="mapHourforecastLightningContainer">
        <div className="hourForcastContainer">
          <div className="hourForcastLabel">
            <p>Voir l'éclairage à</p>
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
export default ForecastDetails;

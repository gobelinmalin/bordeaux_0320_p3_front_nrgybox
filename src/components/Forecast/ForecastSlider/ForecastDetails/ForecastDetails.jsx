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

const ForecastDetails = ({ forecast }) => {
  // date construction
  const jours = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  const mois = [
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ];

  // get the current date
  const date = new Date();
  // get the current date related to arrays and construction of the entire date
  const currentDate = `${jours[date.getDay() - 1]} ${date.getDate()} ${mois[date.getMonth()]
  } ${date.getFullYear()}`;

  // get the weather icon in the Weather API
  const iconWeather = forecast && forecast.current && forecast.current.weather[0].icon;

  // get the sunrise and the sunset timestamps
  const timeStampSunrise = forecast && forecast.current && forecast.daily[0].sunrise;
  const timeStampSunset = forecast && forecast.current && forecast.daily[0].sunset;
  const transformSunrise = timeStampSunrise * 1000;
  const transformSunset = timeStampSunset * 1000;

  // transform the timestamps to a basic date format
  const sunrise = new Date(transformSunrise);
  const sunset = new Date(transformSunset);

  // get only the time
  const timeSunrise = `${sunrise.getHours()}:${sunrise.getMinutes()}`;
  const timeSunset = `${sunset.getHours()}:${sunset.getMinutes()}`;

  // const today = forecast && forecast.current && forecast.current.dt;
  // const dateTest = dateformat(today, "dddd, mmmm dS");
  // console.log(dateTest);

  return (
    <div className="ForecastDetailsContainer">
      <div className="dateWeatherContainer">
        <div className="dateFavouritContainer">
          <div className="dateForcast">
            <p>{currentDate}</p>
          </div>
        </div>
        <div className="weatherContainer">
          <div className="weatherIcon">
            <img
              src={`http://openweathermap.org/img/wn/${iconWeather}.png`}
              alt="Weather icon"
            />
          </div>
          <div className="weatherTemperature">
            {forecast.current && <p>{Math.round(forecast.current.temp)}°C</p>}
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
            <p>{timeSunrise}</p>
          </div>
        </div>
        <div className="sunsetContainer">
          <div className="sunsetLabel">
            <p>Couché</p>
          </div>
          <div className="sunsetValue">
            <p>{timeSunset}</p>
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
            <p>22:45</p>
          </div>
        </div>
        <div className="moonsetContainer">
          <div className="moonsetLabel">
            <p>Couché</p>
          </div>
          <div className="moonsetValue">
            <p>06:50</p>
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
            <p className="hourValue">07:40</p>
            <p className="hourValue">20:40</p>
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

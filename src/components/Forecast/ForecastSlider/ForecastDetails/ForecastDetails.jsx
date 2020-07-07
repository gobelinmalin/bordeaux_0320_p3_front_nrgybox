// Modules
import React from 'react';
import SemiCircleProgressBar from 'react-progressbar-semicircle';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// CSS
import './ForecastDetails.css';

const ForecastDetails = ({ day }) => {
  return (
    <div className="ForecastDetailsContainer">
      <div className="dateWeatherContainer">
        <div className="dateForcast">
          <p>{day.date}</p>
        </div>
        <div className="weatherContainer">
          <img
            src={`http://openweathermap.org/img/wn/${day.iconWeather}.png`}
            alt="Weather icon"
          />
          <p>{day.temp}°C</p>
        </div>
        <div className="hrContainer">
          <hr className="hr1" />
        </div>
      </div>
      <div className="sunriseSunsetContainer">
        <img
          className="sunIcon"
          src="https://zupimages.net/up/20/24/ra58.png"
          alt="Pictogramme du soleil"
        />
        <div className="sunriseContainer">
          <p>Lever</p>
          <p>{day.sunrise}</p>
        </div>
        <div className="sunsetContainer">
          <p>Coucher</p>
          <p>{day.sunset}</p>
        </div>
      </div>
      <div className="hrContainer">
        <hr className="hr1" />
      </div>
      <div className="forecastLightningContainer">
        <p>Consignes d&apos;éclairage</p>
        <div className="dayforecastLightningJauge">
          <SemiCircleProgressBar
            percentage={100}
            stroke="#f2ef30"
            strokeWidth={10}
            diameter={130}
            background="#FFFF"
          />
        </div>
        {day.prog ? (
          day.prog.map((date) => (
            <div className="dayforecastLightningHourInfo">
              <p className="hourValue">{date.date_start}</p>
              <p className="hourValue">{date.date_end}</p>
            </div>
          ))
        ) : (
          <p>Aucun programme trouvé</p>
        )}
      </div>
      {/* <div className="ContainerAllDayPrograms">
        <Link to="/programs">
          <div className="ContainerPlusProgram">
            <p>+</p>
          </div>
          Voir tous les programmes pour cette journée
        </Link>
      </div> */}
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

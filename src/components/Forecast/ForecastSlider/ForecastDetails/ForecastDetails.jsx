// Modules
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// CSS
import './ForecastDetails.css';

const ForecastDetails = ({ day }) => {
  const arrProgsPercent = [];

  day.prog &&
    day.prog.map((elem) => {
      const arrPercent = [];

      const hourStart = elem.date_start.split(':');
      const hourEnd = elem.date_end.split(':');

      const convertHourStart = parseInt(hourStart[0], 10);
      const convertHourEnd = parseInt(hourEnd[0], 10);
      const convertMinuteStart = parseInt(hourStart[1], 10) / 60;
      const convertMinuteEnd = parseInt(hourEnd[1], 10) / 60;

      const calculPercentStart =
        ((convertHourStart + convertMinuteStart) / 24) * (100).toFixed(2);

      let calculPercentEnd = 0;

      if (convertHourEnd === 0 && convertMinuteEnd === 0) {
        calculPercentEnd = 100;
      } else {
        calculPercentEnd =
          ((convertHourEnd + convertMinuteEnd) / 24) * (100).toFixed(2);
      }

      arrPercent.push(calculPercentStart, calculPercentEnd);

      arrProgsPercent.push(arrPercent);
    });

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
        <div className="ContainerConsignes">
          <p>Consignes d&apos;éclairage</p>
          <span className="ConsigneElement">(sur 24h)</span>
        </div>
        {arrProgsPercent.length !== 0 && (
          <Link to={{ pathname: '/programme', state: { day } }}>modifier</Link>
        )}
        <div className="AllTimeline">
          {arrProgsPercent.length !== 0 ? (
            arrProgsPercent.map((percent, index) => (
              <div
                className="ContainerPartTimeline"
                style={{
                  width: `${percent[1] - percent[0]}%`,
                  left: `${percent[0]}%`,
                }}
              >
                <div className="PartTimeline">
                  <div className="PartTimelineElement start">
                    {day.prog[index].date_start}
                  </div>
                  <div className="PartTimelineElement end">
                    {day.prog[index].date_end}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucun programme trouvé</p>
          )}
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

// Modules
import React from 'react';
import GaugeChart from 'react-gauge-chart';

// Components
import { ReactComponent as Heart } from '../../../../icons/heartSolid.svg';
import { ReactComponent as Sun } from '../../../../icons/sunnyOutline.svg';
import { ReactComponent as Moon } from '../../../../icons/moonOutline.svg';

// CSS
import './ForecastDetails.css';

const ForecastDetails = () => {
  return (
    <div className="ForecastDetailsContainer">
      <div className="dateWeatherContainer">
        <div className="dateFavouritContainer">
          <div className="dateForcast">
            <p> Mercredi 10 Juin 2020 </p>
          </div>
          <div className="FavouritIcon">
            {/* <img src="https://zupimages.net/up/20/18/yiyd.png" alt="" /> */}
            <Heart />
          </div>
        </div>
        <div className="weatherContainer">
          <div className="weatherIcon">
            <p>Icon</p>
          </div>
          <div className="weatherTemperature">
            <p>23°</p>
          </div>
        </div>
        <div className="hrContainer">
          <hr className="hr1" />
        </div>
      </div>
      <div className="sunriseSunsetContainer">
        <div className="sunIcon">
          <Sun />
        </div>
        <div className="sunriseContainer">
          <div className="sunriseLabel">
            <p>Levé</p>
          </div>
          <div className="sunriseValue">
            <p>07:00</p>
          </div>
        </div>
        <div className="sunsetContainer">
          <div className="sunsetLabel">
            <p>Couché</p>
          </div>
          <div className="sunsetValue">
            <p>21:00</p>
          </div>
        </div>
      </div>
      <div className="hrContainer">
        <hr className="hr1" />
      </div>
      <div className="moonriseMoonsetContainer">
        <div className="moonIcon">
          <Moon />
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
            <p>Journée</p>
          </div>
          <div className="dayforecastLightningJauge">
            <GaugeChart
              id="gauge-chart5"
              colors={['#F7FA5C', '#FFFFFF']}
              arcsLength={[0.3, 0.7]}
            />
          </div>
          <div className="dayforecastLightningEditCTA">
            <button type="button"> Edit </button>
          </div>
        </div>
        <div className="nightforecastLightningContainer">
          <div className="nightforecastLightningLabel">
            <p>Nuit</p>
          </div>
          <div className="nightforecastLightningJauge">
            <p>Jauge</p>
          </div>
          <div className="nightforecastLightningEditCTA">
            <button type="button"> Edit </button>
          </div>
        </div>
      </div>
      <div className="mapHourforecastLightningContainer">
        <div className="hourForcastContainer">
          <div className="hourForcastLabel">
            <p>Voir les consignes d&aposéclairage</p>
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

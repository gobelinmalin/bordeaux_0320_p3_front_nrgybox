// Modules
import React, { useState, useEffect } from 'react';

// Components
import Axios from 'axios';
import { ReactComponent as EditPen } from '../../icons/editPen.svg';
import ForecastSlider from './ForecastSlider/ForecastSlider';

// CSS
import './ForecastContainer.css';

const ForecastContainer = () => {
  const [select, setSelect] = useState();
  const [forecast, setForecast] = useState({});

  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     url: `http://localhost:3000/api/programs/1/forecasts/1`,
  //     data: forecast
  //   })
  //   .then((response) => setForecast(response))
  // }, []);

  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=44.910544&lon=-0.236538&exclude=hourly&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.data)
      .then((data) => setForecast(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ForecastContainer">
      <h1>Les prévisions lumineuses</h1>
      <div className="ForecastContainerHeader">
        <div className="ForecastContainerHeaderElem">
          <div className="GeolocUser">
            <div className="CityIconEdit">
              <h3>Ville</h3>
              <div className="EditAdressIcon">
                <EditPen />
              </div>
            </div>
            <h3>Adresse</h3>
          </div>
          <div>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
              <option value="semaine">Semaine</option>
              <option value="lundi">Lundi</option>
              <option value="mardi">Mardi</option>
              <option value="mercredi">Mercredi</option>
              <option value="jeudi">Jeudi</option>
              <option value="vendredi">Vendredi</option>
              <option value="samedi">Samedi</option>
              <option value="dimanche">Dimanche</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <ForecastSlider forecast={forecast} />
      </div>
    </div>
  );
};

export default ForecastContainer;

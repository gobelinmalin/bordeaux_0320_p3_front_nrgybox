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
  const [forecast, setForecast] = useState([]);

  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     url: `http://localhost:3000/api/programs/:idProgram/forecasts/:idForecast`,
  //     data: forecast
  //   })
  //   .then((response) => setForecast(response))
  // }, [])

  useEffect(() => {
    Axios.get('http://localhost:3000/api/forecast')
      .then((response) => response.data)
      .then((data) => setForecast(data.forecast));
  }, []);

  const { date } = forecast;

  return (
    <div className="ForecastContainer">
      <h1>Les prévisions lumineuses</h1>
      {date}
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
        <ForecastSlider />
      </div>
    </div>
  );
};

export default ForecastContainer;

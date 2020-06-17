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
  const [sunrise, setSunrise] = useState({});
  const [sunset, setSunset] = useState({});
  const [iconWeather, setInconWeather] = useState({});
  const [forecastMoon, setForecastMoon] = useState({});
  const [dateStartProgram, setDateStartProgram] = useState({});
  const [dateEndProgram, setDateEndProgram] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});

  // get data from the weather API
  useEffect(() => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=44.910544&lon=-0.236538&exclude=hourly&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((response) => response.data)
      .then((data) => {
        // setSunrise(data.daily[0].sunrise)
        // setSunset(data.daily[0].sunset)
        // setInconWeather(data.current.weather[0].icon)
        switch(select){
          case "lundi":
            return setForecastWeather(
              data.daily[0].dt,
              data.daily[0].sunrise,
              data.daily[0].sunset,
              data.daily[0].weather[0].icon
            );
            break;
          case "mardi":
            return setForecastWeather(
              data.daily[1].dt,
              data.daily[1].sunrise,
              data.daily[1].sunset,
              data.daily[1].weather[0].icon
            )
            break;
        }
        return null;
      })
      .catch((error) => console.log(error));
  }, []);

  // get data from lunopia API (moon ephemeris)
  useEffect(() => {
    Axios.get(
      `http://www.lunopia.com/call?what=rs&where=Bordeaux&when=current&key=${process.env.REACT_APP_MOON_API_KEY}`
    )
      .then((response) => response.data)
      .then((data) => setForecastMoon(data))
      .catch((error) => console.log(error));
  }, []);

  // get data from de database (program table)
  useEffect(() => {
    Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_URL}api/programs`,
      data: dateStartProgram,
      data: dateEndProgram
    }).then((response) => {
      if (response.data.status === 'success'){
        setDateStartProgram(response.data[0].date_start)
        setDateEndProgram(response.data[0].date_end)
      }
      else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    }
  )}, []);

  // tableau de données des api
  // const allDataForecast = [

  // ]

  //localStorage adresse/ville liée au programme

  console.log(forecastWeather)

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
              <option id="" value="semaine">Semaine</option>
              <option id="" value="lundi">Lundi</option>
              <option id="" value="mardi">Mardi</option>
              <option id="" value="mercredi">Mercredi</option>
              <option id="" value="jeudi">Jeudi</option>
              <option id="" value="vendredi">Vendredi</option>
              <option id="" value="samedi">Samedi</option>
              <option id="" value="dimanche">Dimanche</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <ForecastSlider
          sunrise={sunrise}
          sunset={sunset}
          iconWeather={iconWeather}
          forecastMoon={forecastMoon}
          dateStartProgram={dateStartProgram}
          dateEndProgram={dateEndProgram}
        />
      </div>
    </div>
  );
};

export default ForecastContainer;

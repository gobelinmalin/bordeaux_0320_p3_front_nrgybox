// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


// Components
import { ReactComponent as EditPen } from '../../icons/editPen.svg';
import ForecastSlider from './ForecastSlider/ForecastSlider';
import reducers from '../../reducers/index';
import { weatherForecast } from '../../actions/ForecastAction';

// CSS
import './ForecastContainer.css';


const ForecastContainer = ({ dispatch }) => {

  // const store = createStore(reducers, applyMiddleware(thunk));
  
  const [select, setSelect] = useState("semaine");
  // const [sunrise, setSunrise] = useState({});
  // const [sunset, setSunset] = useState({});
  // const [iconWeather, setInconWeather] = useState({});
  const [forecastMoon, setForecastMoon] = useState({});
  const [dateStartProgram, setDateStartProgram] = useState({});
  const [dateEndProgram, setDateEndProgram] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [selectedDay, setSelectedDay] = useState({});
  // tableau de données des api
  const [allDataForecast, setAllDataForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   // get data from the weather API
  //   const getWeather = () => {
  //     return Axios.get(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=44.910544&lon=-0.236538&exclude=hourly&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  //     );
  //   };

  //   // get data from lunopia API (moon ephemeris)
  //   const getMoon = () => {
  //     return Axios.get(
  //       `http://www.lunopia.com/call?what=rs&where=Bordeaux&when=current&key=${process.env.REACT_APP_MOON_API_KEY}`
  //     );
  //   };

  //   // get data from de database (program table)
  //   const getDataDB = () => {
  //     return Axios({
  //       method: 'GET',
  //       url: `${process.env.REACT_APP_URL}api/programs`,
  //       data: dateStartProgram,
  //       data: dateEndProgram
  //     });
  //   };

  //   Promise.all([getWeather(), getMoon(), getDataDB()])
  //     .then((results) => {
  //       setSelectedDay({
  //         timestamp: results[0].data.current.dt,
  //         sunrise: results[0].data.current.sunrise,
  //         sunset: results[0].data.current.sunset,
  //         iconWeather: results[0].data.current.weather[0].icon
  //       });
  //       setForecastWeather(results[0].data);

  //       setForecastMoon(results[1].data);

  //       setDateStartProgram(results[2].data[0].date_start);
  //       setDateEndProgram(results[2].data[0].date_end);

  //       setAllDataForecast([
  //         {
  //           selectedDay,
  //           dateStartProgram,
  //           dateEndProgram,
  //           loading
  //         }
  //       ]);

  //       setLoading(false);
  //     });

  // }, []);

  // weather
  const fetchDataWeather = () => {
    return(dispatch) => {
      Axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=44.910544&lon=-0.236538&exclude=hourly&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(data => {
        dispatch(weatherForecast(data))
      })
      .catch(err => {
        throw(err)
      });
    };
  };

  // handle the select element with the onChange method
  const handleChangeSelect = (e) => {
    e.preventDefault();

    const valueSelect = e.target.value;
    setSelect(valueSelect);

    const data = forecastWeather;
    let daySelect = {};

    switch (valueSelect) {
      case "Semaine":
        daySelect = data.daily[0];
        break;
      case "Lundi":
        daySelect = data.daily[1];
        break;
      case "Mardi":
        daySelect = data.daily[2];
        break;
      case "Mercredi":
        daySelect = data.daily[3];
        break;
      case "Jeudi":
        daySelect = data.daily[4];
        break;
      case "Vendredi":
        daySelect = data.daily[5];
        break;
      case "Samedi":
        daySelect = data.daily[6];
        break;
      case "Dimanche":
        daySelect = data.daily[7];
        break;
    };

    return setSelectedDay({
      timestamp: daySelect.dt,
      sunrise: daySelect.sunrise,
      sunset: daySelect.sunset,
        // iconWeather: daySelect.weather[0].icon
    });
  };

  // transform a timestamp in a day by the array of days
  const timestampToDay = (timestamp) => {
    const transformTimestamp = timestamp * 1000;
    const date = new Date(transformTimestamp);
    const jours = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ];
    return jours[date.getDay()];
  };

  // "semaine" get the current weather and get the weekly forecast lighting
  const arrayDay = forecastWeather.daily && forecastWeather.daily.map((day, index) => {
    if(index === 0){
      return <option key={index} value="Semaine">Semaine</option>;
    }
    else{
      return <option key={index} value={timestampToDay(day.dt)}>{timestampToDay(day.dt)}</option>;
    }
  });

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
            <select id="selectDayForecast" name="selectDayForecast" value={select} onChange={(e) => handleChangeSelect(e)}>
              {arrayDay}
            </select>
          </div>
        </div>
      </div>
      <div className="cardContainer">
        <ForecastSlider
          forecastMoon={forecastMoon}
          selectedDay={selectedDay}
          dateStartProgram={dateStartProgram}
          dateEndProgram={dateEndProgram}
          loading={loading}
          allDataForecast={allDataForecast}
        />
      </div>
    </div>
  );
};

// store.dispatch({ type: "SELECT_DAY_FETCH_DATA" });

const mapStateToProps = (state) => {
  // return {
  //   forecast: state.forecast,
  // };
  return state;
};

export default connect(mapStateToProps)(ForecastContainer);

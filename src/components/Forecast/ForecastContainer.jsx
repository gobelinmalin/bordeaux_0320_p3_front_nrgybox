// Modules
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';

// Components
import { ReactComponent as EditPen } from '../../icons/editPen.svg';
import ForecastSlider from './ForecastSlider/ForecastSlider';
import {
  weatherForecast,
  dataProgramForecast,
  allDay,
} from '../../actions/ForecastAction';

// CSS
import './ForecastContainer.css';

const ForecastContainer = ({ arrayAllDay }) => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

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

  // transform a timestamp in entire format date
  const formatDate = (timestamp) => {
    // date construction
    const jours = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
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
    const date = new Date(timestamp * 1000);

    // get the current date related to arrays and construction of the entire date
    const currentDate = `${jours[date.getDay()]} ${date.getDate()} ${
      mois[date.getMonth()]
    } ${date.getFullYear()}`;

    return currentDate;
  };

  useEffect(() => {
    // weather API
    const fetchDataWeather = () => {
      return Axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=44.910544&lon=-0.236538&exclude=hourly&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
    };

    // dates start and end program
    // const fetchDataProgram = () => {
    //   return Axios({
    //     method: 'GET',
    //     url: `${process.env.REACT_APP_URL}/programs`
    //   })
    // };

    Promise.all([fetchDataWeather()]) // fetchDataProgram()
      .then((results) => {
        dispatch(weatherForecast(results[0].data));
        // dispatch(dataProgramForecast(results[1]));

        const arr = [];

        // for each day, construct an array of objects with all day informations
        results[0].data.daily.forEach((day, index) => {
          // get the current date
          const date = new Date(day.dt * 1000);

          // moon API
          Axios.get(
            `http://www.lunopia.com/call?what=rs&where=Bordeaux&when=specDate&day=${date.getDate()}&month=${
              date.getMonth() + 1
            }&year=${date.getFullYear()}&key=${
              process.env.REACT_APP_MOON_API_KEY
            }`
          )
            .then((res) => res.data)
            .then((data) => {
              arr[index] = {
                date: formatDate(day.dt),
                currentDay: timestampToDay(day.dt),
                sunrise: data.SOLEIL.LEVE,
                sunset: data.SOLEIL.COUCHE,
                // results[1].date_start
                // results[1].date_end
                moonrise: data.LUNE.LEVE,
                moonset: data.LUNE.COUCHE,
                temp: Math.floor(day.temp.day),
                iconWeather: day.weather[0].icon,
              };
              if (arr.length === 8) {
                setIsLoading(false);
              }
            })
            .catch((err) => console.log(err));
        });
        dispatch(allDay(arr));
      });
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
        </div>
      </div>
      <div className="cardContainer">
        <ForecastSlider arrayAllDay={arrayAllDay} isLoading={isLoading} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arrayAllDay: state.ForecastDaysReducer.data,
  };
};

ForecastContainer.defaultProps = {
  arrayAllDay: [{}],
};

ForecastContainer.propTypes = {
  arrayAllDay: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(ForecastContainer);

// Modules
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';


// Components
import { ReactComponent as EditPen } from '../../icons/editPen.svg';
import ForecastSlider from './ForecastSlider/ForecastSlider';
import { allDay } from '../../actions/ForecastAction';

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

  const timestampToHour = (timestamp) => {
    const transformTimestamp = timestamp * 1000;
    const hour = new Date(transformTimestamp);
    return `${hour.getHours()}:${hour.getMinutes()}`;
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
    let position = {};

    if (localStorage.getItem('datageoloc')) {
      const jsonParse = JSON.parse(localStorage.getItem('datageoloc'))[0]
        .latlng;

      position = {
        lat: jsonParse.lat,
        lng: jsonParse.lng,
      };
    } else {
      const jsonParse = JSON.parse(localStorage.getItem('position'));

      position = {
        lat: jsonParse.latitude,
        lng: jsonParse.longitude,
      };
    }

    // weather API
    const fetchDataWeather = () => {
      return Axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lng}&exclude=hourly&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
    };

    // dates start and end program
    const fetchDataProgram = () => {
      return Axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL}/programs`,
      });
    };

    Promise.all([fetchDataWeather(), fetchDataProgram()]).then((results) => {
      const arr = [];

      // for each day, construct an array of objects with all day informations
      results[0].data.daily.forEach((day, index) => {
        arr[index] = {
          date: formatDate(day.dt),
          currentDay: timestampToDay(day.dt),
          sunrise: timestampToHour(day.sunrise),
          sunset: timestampToHour(day.sunset),
          startProg: results[1].data[index].date_start,
          endProg: results[1].data[index].date_end,
          temp: Math.floor(day.temp.day),
          iconWeather: day.weather[0].icon,
        };
        if (arr.length === 8) {
          setIsLoading(false);
          dispatch(allDay(arr));
        }
      });
    });
  }, []);

  return (
    <div className="ForecastContainer">
      <h1>Les prévisions lumineuses</h1>
      <div className="ForecastContainerHeader">
        <div className="ForecastContainerHeaderElem">
          <div className="GeolocUser">
            <div className="CityIconEdit">
              <h3>nom ville</h3>
              {/* {LocalStorageGeoloc[0].text} */}
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

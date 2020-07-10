// Modules
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';

// Components
import { ReactComponent as EditPen } from '../../icons/editPen.svg';
import ForecastSlider from './ForecastSlider/ForecastSlider';
import ForecastMap from './ForecastSlider/ForecastMap/ForecastMap';
import { allDay } from '../../actions/ForecastAction';

// CSS
import './ForecastContainer.css';

const ForecastContainer = ({ arrayAllDay }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reverseLatLng, setReverseLatLng] = useState('');
  const [cityName, setCityName] = useState('');

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
      setCityName(JSON.parse(localStorage.getItem('datageoloc'))[0].text);
      const jsonParseCity = JSON.parse(localStorage.getItem('datageoloc'))[0]
        .latlng;

      position = {
        lat: jsonParseCity.lat,
        lng: jsonParseCity.lng,
      };
    } else {
      const jsonParseGeoloc = JSON.parse(localStorage.getItem('position'));

      position = {
        lat: jsonParseGeoloc.latitude,
        lng: jsonParseGeoloc.longitude,
      };

      // reverse latitude and longitude to get the city name
      Axios.get(
        `https://api-adresse.data.gouv.fr/reverse/?lat=${position.lat}&long=${position.lng}`
      )
        .then((res) => res.data)
        .then((data) => setReverseLatLng(data.features[0].properties.label));
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
      // find in data (get in the database) if there are multiple programs for one date
      const progsPerDays = [];
      const progsDone = [];

      const progs = results[1].data;

      progs.forEach((prog, index, arr) => {
        const progDay = [];

        if (progsDone.indexOf(prog.date) === -1) {
          arr.forEach((prog2) => {
            if (prog2.date === prog.date) {
              progDay.push(prog2);
            }
          });

          progsPerDays.push(progDay);
          progsDone.push(prog.date);
        }
      });

      const arr = [];

      // for each day, construct an array of objects with all day informations
      results[0].data.daily.forEach((day, index) => {
        arr[index] = {
          geoloc: position,
          date: formatDate(day.dt),
          currentDay: timestampToDay(day.dt),
          sunrise: timestampToHour(day.sunrise),
          sunset: timestampToHour(day.sunset),
          // get the array of dates (program)
          prog: progsPerDays[index],
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
        <h3>{cityName !== '' ? cityName : reverseLatLng}</h3>
        <div className="EditAdressIcon">
          <Link to="/">
            <EditPen />
          </Link>
        </div>
      </div>
      <div className="cardContainer">
        <ForecastSlider arrayAllDay={arrayAllDay} isLoading={isLoading} />
      </div>
      <div className="mapForecastLightningContainer">
        <ForecastMap arrayAllDay={arrayAllDay} />
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

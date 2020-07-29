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
import {
  allDay,
  addFav,
  deleteFav,
  resetFav,
} from '../../actions/ForecastAction';

// CSS
import './ForecastContainer.css';

const ForecastContainer = ({ arrayAllDay, fav }) => {
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

  const convertDate = (date, formate) => {
    const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1 < 10 ? '0' : '') + date.getMonth() + 1;
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();

    return formate
      .replace(/h+/, hour)
      .replace(/m+/, minute)
      .replace(/s+/, second)
      .replace(/Y+/, year)
      .replace(/M+/, month)
      .replace(/D+/, day);
  };

  useEffect(() => {
    let position = {};

    let city;

    if (localStorage.getItem('datageoloc')) {
      setCityName(JSON.parse(localStorage.getItem('datageoloc'))[0].text);
      city = JSON.parse(localStorage.getItem('datageoloc'))[0].text;
      const jsonParseCity = JSON.parse(localStorage.getItem('datageoloc'))[0]
        .latlng;

      position = {
        lat: jsonParseCity.lat,
        lng: jsonParseCity.lng,
      };
    } else if (localStorage.getItem('position')) {
      const jsonParseGeoloc = JSON.parse(localStorage.getItem('position'));

      position = {
        lat: jsonParseGeoloc.latitude,
        lng: jsonParseGeoloc.longitude,
      };

      // reverse latitude and longitude to get the city name
      Axios.get(
        `${process.env.REACT_APP_GOUV}/reverse/?lat=${position.lat}&long=${position.lng}`
      )
        .then((res) => res.data)
        .then((data) => setReverseLatLng(data.features[0].properties.label))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }

    // weather API
    const fetchDataWeather = () => {
      return Axios.get(
        `${process.env.REACT_APP_WEATHER}/onecall?lat=${position.lat}&lon=${position.lng}&exclude=hourly&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
    };

    // dates start and end program
    const fetchDataProgram = () => {
      const nameOfCity = city && city.split(',')[0];
      return Axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL}/programs?city=${
          nameOfCity !== '' ? nameOfCity : reverseLatLng
        }`,
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
        const convertTimestamp = convertDate(
          new Date(day.dt * 1000),
          'YYYY-MM-DD'
        );

        let dateProg = [];

        progsPerDays.map((dataProg, indexProg, arrProg) => {
          if (dataProg[0].date) {
            /* eslint no-unused-expressions: [2, { allowTernary: true }] */
            convertTimestamp === dataProg[0].date
              ? (dateProg = arrProg[indexProg])
              : (dateProg = []);
            return dateProg;
          }
          return null;
        });

        arr[index] = {
          geoloc: position,
          date: formatDate(day.dt),
          currentDay: timestampToDay(day.dt),
          sunrise: timestampToHour(day.sunrise),
          sunset: timestampToHour(day.sunset),
          // get the array of dates (program)
          prog: dateProg,
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

  /* eslint no-unneeded-ternary: ["error", { "defaultAssignment": true }] */
  const geoloc = cityName ? cityName : reverseLatLng;

  const handleClickFav = () => {
    const local = localStorage.getItem('favorites');
    const arrFav = local ? JSON.parse(local) : [];

    // le favoris n'existe pas, on souhaite le rajouter
    if (local === null || arrFav.indexOf(geoloc) === -1) {
      arrFav.push(geoloc);
      const favJson = JSON.stringify(arrFav);
      localStorage.setItem('favorites', favJson);

      dispatch(addFav());
    } else {
      // le favoris existe, on souhaite le supprimer
      // dire si ça existe ou non ? => si oui, retourne son index
      const elemGeoloc = arrFav.indexOf(geoloc);
      // (index de l'élément, un seul élément à supprimer)
      arrFav.splice(elemGeoloc, 1);
      // string => ["Bordeaux, Aquitaine..."]
      const favJson = JSON.stringify(arrFav);
      localStorage.setItem('favorites', favJson);

      dispatch(deleteFav());
    }
  };

  useEffect(() => {
    const local = localStorage.getItem('favorites');
    const arrFav = local ? JSON.parse(local) : [];

    dispatch(resetFav());
    if (arrFav.indexOf(geoloc) > 0) {
      dispatch(addFav());
    } else {
      dispatch(deleteFav());
    }
  }, []);

  return (
    <div className="ForecastContainer">
      <h1 className="TitlePage">Les prévisions lumineuses</h1>
      <div className="ForecastContainerHeader">
        <h3>{cityName !== '' ? cityName : reverseLatLng}</h3>
        <div className="ContainerIconFavorites">
          <Link to="#/">
            <svg
              onClick={handleClickFav}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <title>ionicons-v5-f</title>
              <path
                className={fav}
                d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                style={{
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px',
                }}
              />
            </svg>
          </Link>
        </div>
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
    fav: state.ForecastFavGeolocReducer,
  };
};

ForecastContainer.defaultProps = {
  arrayAllDay: [{}],
  fav: [{}],
};

ForecastContainer.propTypes = {
  arrayAllDay: PropTypes.arrayOf(PropTypes.object),
  fav: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(ForecastContainer);

// modules
import React from 'react';
import Slider from 'react-slick';
// css
import './ForecastSlider.css';
// components
import ForecastDetails from './ForecastDetails/ForecastDetails';

const ForecastSlider = (props) => {
  // const [forecastUpdate, setForecastUpdate] = useState({});

  // const forecastFromDetails = (dataFromChild) => {
  //   setForecastUpdate(dataFromChild)
  // }

  const settings = {
    dots: true,
    // appendDots: dots => (
    //     <div
    //       style={{
    //         color: "#FFF"
    //       }}
    //     >
    //     </div>
    //   ),
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 375,
      },
    ],
  };

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
  const date = new Date();

  // get the current date related to arrays and construction of the entire date
  const currentDate = `${jours[date.getDay()]} ${date.getDate()} ${mois[date.getMonth()]
  } ${date.getFullYear()}`;

  // // get the weather icon in the Weather API
  // const iconWeather =
  //   forecastWeather &&
  //   forecastWeather.current &&
  //   forecastWeather.current.weather[0].icon;

  // // get the sunrise and the sunset timestamps
  // const timeStampSunrise = forecastWeather &&
  //   forecastWeather.current &&
  //   forecastWeather.daily[0].sunrise;
  // const timeStampSunset = forecastWeather &&
  //   forecastWeather.current &&
  //   forecastWeather.daily[0].sunset;
  // const transformSunrise = timeStampSunrise * 1000;
  // const transformSunset = timeStampSunset * 1000;

  // // transform the timestamps to a basic date format
  // const sunrise = new Date(transformSunrise);
  // const sunset = new Date(transformSunset);

  // // get only the time
  // const timeSunrise = `${sunrise.getHours()}:${sunrise.getMinutes()}`;
  // const timeSunset = `${sunset.getHours()}:${sunset.getMinutes()}`;

  return (
    <div className="ForecastContainer">
      <div className="ForecastSlider">
        <Slider {...settings}>
          <div className="cardSlider">
            <div className="card1">
              {/* {props.map((element, index) => {
                return <ForecastDetails
                  key={index}
                  sunrise={element.sunrise}
                  sunset={element.sunset}
                  iconWeather={element.iconWeather}
                  forecastMoon={element.forecastMoon}
                  dateStartProgram={element.dateStartProgram}
                  dateEndProgram={element.dateEndProgram}
                />
              })} */}
              coucou
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ForecastSlider;

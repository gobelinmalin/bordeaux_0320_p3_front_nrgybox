import React, { useState } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import SearchBar from '../SearchBar/SearchBar';
import './style/home.css';

const Home = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [position, setPosition] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    showError: false,
    message: ""
  });
  const [redirectWeather, setRedirectWeather] = useState();
      
  const handleClickLocation = (e) => {
    setLoading(true);
    try {
      navigator.geolocation.getCurrentPosition((positionCoords) => {
        let positionGeoloc =  positionCoords.coords;
        const { latitude, longitude } = positionGeoloc;
        localStorage.removeItem('datageoloc');
        localStorage.setItem(
          'position',
          JSON.stringify({ latitude, longitude })
        );
        setLoading(false);

        setError({ showError: false, message: undefined });

        if (error.showError === false) {
          setRedirectWeather(<Redirect to="/weather" />);
        }

      }, (err) => console.log("aze", err));

    } catch(err) {
      const message = err.message.length > 0 ? err.message : "Impossible de récupérer votre localisation. Vérifiez les permissions sur votre navigateur";
      setError({ showError: true, message });
      setLoading(false);
    }
  }

  // handleSearchClick(e) {
  //   e.preventDefault();
  //   this.setState({
  //     searchHistory: [
  //       JSON.parse(localStorage.getItem('datageoloc'))[0].text
  //       // 'aze',
  //       // 'test',
  //       // 'truc'
  //     ]
  //   });
  // }

  const handleKeyPress = (e) => {
    console.log(e.charCode === 13);
    if (e.charCode === 13) {
      setSearchHistory({
        searchHistory: [JSON.parse(localStorage.getItem('datageoloc'))[0].text],
      });
    }
  }

  return (
    <div className="container_01">
      <h1>
        <p className="logo_start">NRGY</p>
        <p className="logo_end">Box</p>
      </h1>

      <div className="mapAndSearchContainer">
        <Map
          className="Home_map_none"
          center={{ lat: 51.5287718, lng: -0.2416804 }}
          style={{ background: '#11ffee00' }}
          zoom={1}
        >
          <TileLayer
            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          />
          <SearchBar
            className="SearchBar"
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </Map>
      </div>
      <div className="homeContent">
        <div className="lamp_logo">
          <div className="searchCTAContainer">
            {redirectWeather}
            {loading ? (
              <p className="TextWaitGeoloc">Géolocalisation en cours...</p>
            ) : (
              <button
                className="searchCTA1"
                type="button"
                onClick={(e) => handleClickLocation(e)}
                value="Click me"
              >
                Me localiser
              </button>
            )}
            <NavLink className="linkToForecats2" to="/weather">
              <button className="searchCTA2" type="button">
                Rechercher
              </button>
            </NavLink>
          </div>
          <div className="ContainerSearchHistory">
            <h3 className="titleLastResearch">Vos dernières recherches :</h3>
            {searchHistory.map((search) => {
              return <Link to='/weather'>{search}</Link>;
            })}
          </div>
        </div>
      </div>
      <div className="text_intro">
        <a className="text_start_intro" style={{ color: '#538abc' }}>
          Energy just
        </a>{' '}
        <a className="text_end_intro" style={{ color: '#e9e98a' }}>
          in time
        </a>
      </div>
      <div className="wrap_text_modo">
        <a className="text_modo">
          L'éclairage intelligent pour une ville durable et responsable
        </a>
      </div>
    </div>
  );
}

export default Home;

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Burger from '../BurgerMenu/Burger';
import logo_nrgybox from './style/logo_nrgybox.png';
import './style/home.css';

export default function Home() {
  const [address, setAddress] = React.useState('');
  // eslint-disable-next-line no-unused-vars
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div className="container_01">
      <Burger />
      <h1>
        <p className="logo_start">NRGY</p>
        <p className="logo_end">Box</p>
      </h1>
      <div className="search_bar">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({ placeholder: 'Entrez localisation' })}
              />

              <div className="search_bar_result">
                {loading ? (
                  <div style={{ color: '#E9E98A' }}>Recherche...</div>
                ) : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <div className="lamp_logo">
        <img src={logo_nrgybox} alt="NRGYBox Logo" />
      </div>
      <div className="text_intro">
        <a className="text_start_intro" style={{color: "#538abc"}}>Energy just</a>{' '}
        <a className="text_end_intro" style={{color: "#e9e98a"}}>in time</a>
      </div>
      <div className="wrap_text_modo">
        <a className="text_modo">
          L'éclairage intelligent pour une ville durable et responsable
        </a>
      </div>
    </div>
  );
}

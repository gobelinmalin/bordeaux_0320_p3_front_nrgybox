import React from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';

import './ForecastMap.css';

const ForecastMap = ({ arrayAllDay }) => {
  const geolocation = arrayAllDay && arrayAllDay[0].geoloc;
  const zoom = 8;

  return (
    <div className="mapContainerWeather">
      <Map
        className="Home_map"
        center={geolocation}
        style={{ background: '#11ffee00' }}
        zoom={zoom}
      >
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
        />
        {/* icon={generalistIcon} sur Marker */}
        <Marker position={geolocation} />
      </Map>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arrayAllDay: state.ForecastDaysReducer.data,
  };
};

ForecastMap.defaultProps = {
  arrayAllDay: [{}],
};

ForecastMap.propTypes = {
  arrayAllDay: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps, null)(ForecastMap);

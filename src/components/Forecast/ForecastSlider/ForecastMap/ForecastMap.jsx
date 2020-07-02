import React from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import './ForecastMap.css';

const ForecastMap = ({ arrayAllDay }) => {
  // const dayLat = arrayAllDay && arrayAllDay.map(geoloc => geoloc.geoloc.lat);
  // const dayLng = arrayAllDay && arrayAllDay.map(geoloc => geoloc.geoloc.lng);
  const latValue = 99999999;
  const longValue = 0.7777777;
  // let latValue = dayLat;
  // let longValue = dayLng;
  const defaultLatLng:LatLngTuple = [latValue, longValue];
  const zoom:number = 8;

  return (
    <div className="mapContainerWeather">
      <Map className="Home_map" center={defaultLatLng} style={{ background: "#11ffee00" }} zoom={zoom}>
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
        ></TileLayer>
        {/* icon={generalistIcon} sur Marker */}
        <Marker position={defaultLatLng}>
          <Popup>
            Dr. Gerard Ptore, <br /> Médecin traitant <br /> 23 cours de la Marne 33000 BORDEAUX
          </Popup>
        </Marker>
      </Map>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    arrayAllDay: state.ForecastDaysReducer.data,
  };
};

export default connect(mapStateToProps, null)(ForecastMap);

import React from 'react'
import { Map, TileLayer } from 'react-leaflet';
//import LocateOff from '../ForecastDetails/LocateOff'
import { LatLngTuple } from 'leaflet';

const latValue = 40.46455000000003
const longValue = -74.25713999999994
const defaultLatLng: LatLngTuple = [latValue, longValue];
const zoom:number = 8;

class ForecastMap extends React.Component {
    render() {
        return (
            <div>
                <Map className="Home_map" center={defaultLatLng} style={{ background: "#11ffee00" }} zoom={zoom}  >
                    <TileLayer
                        attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                        url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                    ></TileLayer>
                </Map>
            </div>
        )
    }
}

export default ForecastMap
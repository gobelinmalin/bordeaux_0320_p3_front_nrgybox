import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../../src'

class SimpleExample extends React.Component {
    constructor() {
      super();
      this.state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      };
    }
  
    render() {
      const position = [this.state.lat, this.state.lng];
      return (
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      );
    }
  }
  
const testPosition = JSON.parse(localStorage.getItem('position'));
const mymap = L.map('mapid').setView([`${testPosition.latitude}, ${testPosition.logitude}`], 13)
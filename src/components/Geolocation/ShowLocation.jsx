import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';
import './style.css';


export default class ShowLocation extends Component {
    render() {
    return (
      <Map zoom={4} center={{ lat: 39.74739, lng: -105 }} />
    );
    }
}


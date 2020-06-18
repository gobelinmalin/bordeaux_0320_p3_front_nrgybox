/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Burger from '../BurgerMenu/Burger';
import logo_nrgybox from './style/logo_nrgybox.png';
import './style/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        localStorage.setItem(
          'position',
          JSON.stringify({ latitude, longitude })
        );
      });
    }
  }

  render() {
    return (
      <div className="container_01">
        <Burger />
        <h1>
          <p className="logo_start">NRGY</p>
          <p className="logo_end">Box</p>
        </h1>
        <div className="lamp_logo">
          <img src={logo_nrgybox} alt="NRGYBox Logo" />
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
}

export default Home;

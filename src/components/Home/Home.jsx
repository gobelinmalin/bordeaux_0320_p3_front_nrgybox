import React, { useState, Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { render } from 'react-dom';
import Burger from '../BurgerMenu/Burger';
import logo_nrgybox from './style/logo_nrgybox.png';
import SearchBar from '../SearchBar/SearchBar';
import './style/home.css';
import { NavLink, Link, Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHistory: [],
    };
    // this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getPosition(position) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        localStorage.setItem(
          'position',
          JSON.stringify({ latitude, longitude })
        );
      });
      this.handleClick.bind(this)
    }    
  }
  handleClick(e) {
    this.getPosition("element clicked");
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

  handleKeyPress(e){
    console.log(e.charCode === 13)
    if (e.charCode === 13) {
      this.setState({
        searchHistory: [
          JSON.parse(localStorage.getItem('datageoloc'))[0].text,
        ]
      });
    }
  }
  
  render() {
    return (
      <div className="container_01">
        <h1>
          <p className="logo_start">NRGY</p>
          <p className="logo_end">Box</p>
        </h1>
       
        <div className="mapAndSearchContainer">
       <Map className="Home_map_none" center={{ lat: 51.5287718, lng: -0.2416804 }} style={{background: "#11ffee00"}} zoom={1}>
          <TileLayer
            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          ></TileLayer>
          <SearchBar onKeyDown={(e) => this.handleKeyPress(e)} />
    </Map> 
    </div>
        <div className="homeContent">
        
        <div className="lamp_logo">
          <div className="searchCTAContainer">
          <NavLink className="linkToForecats" to="/weather">
          <button className='searchCTA1' type="button" onClick={(e) => this.handleClick(e)} value="Click me">Me localiser</button>
        </NavLink>
            <NavLink className="linkToForecats2" to='/weather'>
                <button className="searchCTA2" type="button">
                  Rechercher
                </button>
            </NavLink>
            <div>
              <h3>Vos dernière recherches :</h3>
              {this.state.searchHistory.map(search => {
                return (
                  <Link to='/weather'>{search}</Link>
                )
              })}
            </div>
          </div>
          <div className="logoHome">
            <img src={logo_nrgybox} alt="NRGYBox Logo" />
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
}

export default Home;

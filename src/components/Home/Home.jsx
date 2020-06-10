import React, { Component } from 'react';
import logo_nrgybox from './style/logo_nrgybox.png'
import './style/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            console.log(position);
          },
          function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
        );
      }

    render() {
        return (
            <div className="container">
                <h1><p className="logo_start">NRGY</p><p className="logo_end">Box</p></h1>
                    <div className="lamp_logo">
                        <img src={logo_nrgybox} alt="NRGYBox Logo" />
                    </div>
                        <div className="text_intro">
                            <a className="text_start_intro">Energy just</a> <a className="text_end_intro">in time</a>
                        </div>
                        <div className="wrap_text_modo">
                            <a className="text_modo">L'éclairage intelligent pour une ville durable et responsable</a>
                        </div>
            </div>
        )
    }
}





export default Home
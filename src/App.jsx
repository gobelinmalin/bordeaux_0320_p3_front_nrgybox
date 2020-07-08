/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ForecastContainer from './components/Forecast/ForecastContainer';
import Admin from './components/Users/Admin';
import ShowLocation from './components/Geolocation/ShowLocation';
import Signin from './components/Connexion/Signin';
import PrivateRoute from './components/Connexion/private/PrivateRoute';
import Profile from './components/Connexion/Profile';


// import StateContainer from './container/StateContainer';


import './App.css';
import ContactForm from './components/Contact/ContactForm';
// import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <StateContainer /> */}
            <Route path="/weather" component={ForecastContainer} />
            <Route path="/admin" component={Admin} />
            <Route path="/map" component={ShowLocation} />
            <Route path="/contactus" component={ContactForm} />
            <Route path="/login" component={Signin} />
            <PrivateRoute pathReact="/profile" pathBack="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

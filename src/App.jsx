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
import Favorites from './components/Favorites/Favorites';


import Programme from './components/Programme/Programme';
import Navbar from './components/BurgerMenu/Navbar';
import './App.css';
import ContactForm from './components/Contact/ContactForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Navbar />
            <Route path="/" component={Home} exact />
            <Route path="/weather" component={ForecastContainer} />
            <Route path="/admin" component={Admin} />
            <Route path="/map" component={ShowLocation} />
            <Route path="/contactus" component={ContactForm} />
            <Route path="/login" component={Signin} />
            <Route path="/favorites" component={Favorites} />
            <PrivateRoute
              pathReact="/profile/:id"
              pathBack="/profile"
              component={Profile}
            />
            <Route path="/programme" component={Programme} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// modules
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
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
import ContactForm from './components/Contact/ContactForm';
import AboutUs from './components/AboutUs/AboutUs';

// css
import './App.css';

const App = () => {
  const [userConnected, setUserConnected] = useState(false);

  const checkConnected = () => {
    if (localStorage.getItem('token') !== null) {
      setUserConnected(true);
    } else {
      setUserConnected(false);
    }
  };

  useEffect(() => {
    checkConnected();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Navbar
            userConnected={userConnected}
            checkConnected={checkConnected}
          />
          <Route path="/" component={Home} exact />
          <Route path="/weather" component={ForecastContainer} />
          <Route path="/admin" component={Admin} />
          <Route path="/map" component={ShowLocation} />
          <Route path="/contactus" component={ContactForm} />
          <Route path="/login" component={Signin} />
          <Route path="/favoris" component={Favorites} />
          <PrivateRoute
            pathReact="/profile/:id"
            pathBack="/profile"
            checkConnected={checkConnected}
            component={Profile}
          />
          <Route path="/programme" component={Programme} />
          <Route path="/apropos" component={AboutUs} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ForecastContainer from './components/Forecast/ForecastContainer';
import Admin from './components/Users/Admin';


// import StateContainer from './container/StateContainer';


import './App.css';
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

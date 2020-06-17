/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import ForecastContainer from './components/Forecast/ForecastContainer';
// import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/weather" exact component={ForecastContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

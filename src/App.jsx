import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForecastContainer from './components/Forecast/ForecastContainer';
import StateContainer from './container/StateContainer';

import './App.css';
// import { Button } from "reactstrap";

function App() {
  return (
    <Router>
    <Switch>
      <StateContainer />
      <Route path="/" component={ForecastContainer} />
    </Switch>
  </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ForecastContainer from './components/Forecast/ForecastContainer';
// import { Button } from "reactstrap";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ForecastContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

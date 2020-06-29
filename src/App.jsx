import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Favoris from './Components/Favoris';
import Programme from './Components/Programme';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Favoris" component={Favoris} />
        <Route path="/Programme" component={Programme} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

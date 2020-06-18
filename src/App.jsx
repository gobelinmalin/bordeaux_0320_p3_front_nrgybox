import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Favoris from './Components/Favoris';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Favoris" component={Favoris} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

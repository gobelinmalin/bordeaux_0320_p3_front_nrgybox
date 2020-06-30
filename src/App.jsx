import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Programme from './Components/Programme';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Programme" component={Programme} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

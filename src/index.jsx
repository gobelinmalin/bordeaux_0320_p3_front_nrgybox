// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// Components
import App from './App';
import reducers from './reducers/index';

// CSS
import './index.css';

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__
? window.__REDUX_DEVTOOLS_EXTENSION__()
: f => f

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    devTools,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

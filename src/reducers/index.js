// can having many reducers files and use them all
import { combineReducers } from 'redux';
import ForecastReducer from './ForecastReducer';

export default combineReducers({ ForecastReducer });

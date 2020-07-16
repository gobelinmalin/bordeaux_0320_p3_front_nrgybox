// can having many reducers files and use them all
import { combineReducers } from 'redux';
import ForecastDaysReducer from './ForecastDaysReducer';

export default combineReducers({ ForecastDaysReducer });

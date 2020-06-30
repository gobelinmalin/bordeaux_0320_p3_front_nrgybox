// can having many reducers files and use them all
import { combineReducers } from 'redux';
import ForecastWeatherReducer from './ForecastWeatherReducer';
import ForecastDaysReducer from './ForecastDaysReducer';

export default combineReducers({ ForecastWeatherReducer, ForecastDaysReducer });

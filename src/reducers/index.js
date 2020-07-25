// can having many reducers files and use them all
import { combineReducers } from 'redux';
import ForecastDaysReducer from './ForecastDaysReducer';
import ForecastFavGeolocReducer from './ForecastFavGeolocReducer';

export default combineReducers({ ForecastDaysReducer, ForecastFavGeolocReducer });
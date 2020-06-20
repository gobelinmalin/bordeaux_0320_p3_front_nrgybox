import {
  FETCH_DATA_SELECT_DAY,
  FETCH_DATA_PROGRAM_DB,
  FETCH_DATA_WEATHER,
  FETCH_DATA_MOON,
} from '../actions/ForecastAction';

const ForecastReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SELECT_DAY':
      return {
        ...state,
        data: action.payload,
      };
      break;
    case 'FETCH_DATA_PROGRAM_DB':
      return {
        ...state,
        data: action.payload,
      };
      break;
    case 'FETCH_DATA_WEATHER':
      return {
        ...state,
        data: action.payload,
      };
      break;
    case 'FETCH_DATA_MOON':
      return {
        ...state,
        data: action.payload,
      };
      break;
    default:
      return state;
  }
};

export default ForecastReducer;

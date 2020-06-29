const ForecastWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_WEATHER':
      return {
        ...state,
        data: action.payload,
      };
      break;
    default:
      return state;
  }
};

export default ForecastWeatherReducer;

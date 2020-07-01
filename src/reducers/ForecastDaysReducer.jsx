const ForecastDaysReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ARRAY_DAYS_FORECAST': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default ForecastDaysReducer;

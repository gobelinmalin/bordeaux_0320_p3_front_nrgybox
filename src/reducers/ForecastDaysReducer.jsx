const ForecastDaysReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ARRAY_DAYS_FORECAST':
      return {
        ...state,
        data: action.payload, // .sort((a, b) => {return b.indexes - a.indexes})
      };
      break;
    default:
      return state;
  }
};

export default ForecastDaysReducer;

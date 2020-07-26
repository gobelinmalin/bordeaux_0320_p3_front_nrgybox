const ForecastFavGeolocReducer = (state = "", action) => {
  switch (action.type) {
    case 'ADD_FAV_GEOLOC':
      return state = "FullHeart";
    case 'DELETE_FAV_GEOLOC':
      return state = "EmptyHeart";
    case 'RESET_FAV_GEOLOC':
      return state = "";
    default:
      return state;
    }
};

export default ForecastFavGeolocReducer;

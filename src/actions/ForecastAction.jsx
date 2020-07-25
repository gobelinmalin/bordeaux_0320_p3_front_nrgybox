export const CREATE_ARRAY_DAYS_FORECAST = 'CREATE_ARRAY_DAYS_FORECAST';
export const ADD_FAV_GEOLOC = 'ADD_FAV_GEOLOC';
export const DELETE_FAV_GEOLOC = 'DELETE_FAV_GEOLOC';
export const RESET_FAV_GEOLOC = 'RESET_FAV_GEOLOC';

export function allDay(arrayAllDay) {
  return {
    type: CREATE_ARRAY_DAYS_FORECAST,
    payload: arrayAllDay,
  };
}

export function addFav() {
  return {
    type: ADD_FAV_GEOLOC
  };
}

export function deleteFav() {
  return {
    type: DELETE_FAV_GEOLOC
  };
}

export function resetFav() {
  return {
    type: RESET_FAV_GEOLOC
  };
}

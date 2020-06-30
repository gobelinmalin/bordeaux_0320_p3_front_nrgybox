export const CREATE_ARRAY_DAYS_FORECAST = 'CREATE_ARRAY_DAYS_FORECAST';
export const FETCH_DATA_PROGRAM_DB = 'FETCH_DATA_PROGRAM_DB';
export const FETCH_DATA_WEATHER = 'FETCH_DATA_WEATHER';
// export const FETCH_DATA_MOON = 'FETCH_DATA_MOON';

export function allDay(arrayAllDay) {
  return {
    type: CREATE_ARRAY_DAYS_FORECAST,
    payload: arrayAllDay,
  };
}

export function dataProgramForecast(datesProgram) {
  return {
    type: FETCH_DATA_PROGRAM_DB,
    payload: datesProgram,
  };
}

export function weatherForecast(forecastWeather) {
  return {
    type: FETCH_DATA_WEATHER,
    payload: forecastWeather,
  };
}

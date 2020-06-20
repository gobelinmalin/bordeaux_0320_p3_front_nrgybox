export const FETCH_DATA_SELECT_DAY = 'FETCH_DATA_SELECT_DAY';
export function selectDayForecast (selectedDay) {
  return {
    type: FETCH_DATA_SELECT_DAY,
    payload: selectedDay
  }
};

export const FETCH_DATA_PROGRAM_DB = 'FETCH_DATA_PROGRAM_DB';
export function dataProgramForecast (dataProgram) {
  return {
    type: FETCH_DATA_PROGRAM_DB,
    payload: dataProgram,
  }
};

export const FETCH_DATA_WEATHER = 'FETCH_DATA_WEATHER';
export function weatherForecast (forecastWeather) {
  return {
    type: FETCH_DATA_WEATHER,
    payload: forecastWeather,
  }
};

export const FETCH_DATA_MOON = 'FETCH_DATA_MOON';
export function moonForecast (forecastMoon) {
  return {
    type: FETCH_DATA_MOON,
    payload: forecastMoon,
  }
};

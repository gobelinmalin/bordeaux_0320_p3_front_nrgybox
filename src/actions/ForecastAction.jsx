export const CREATE_ARRAY_DAYS_FORECAST = 'CREATE_ARRAY_DAYS_FORECAST';

export function allDay(arrayAllDay) {
  return {
    type: CREATE_ARRAY_DAYS_FORECAST,
    payload: arrayAllDay,
  };
}

import * as TYPES from '../types';

export const getWeather = (location) => ({
  type: TYPES.WEATHER_FETCH_REQUESTED, location: location
});

export const weatherToggleTemperature = () => ({
  type: TYPES.WEATHER_TOGGLE_TEMPERATURE
})
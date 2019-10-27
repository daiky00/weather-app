import { takeLatest, put } from 'redux-saga/effects';
import * as TYPES from '../types';
import api from '../../api';

function* fetchWeather(action) {
  let latitude = action.location.coords.latitude;
  let longitude = action.location.coords.longitude
  try {
   
    if(latitude && longitude) {
      const data = yield fetch(`${api}/current?lat=${latitude}&lon=${longitude}`).then(response => response.json());
      yield put({ type: TYPES.WEATHER_FETCH_SUCCEEDED, data: data });
    }
  } catch (error) {
    yield put({ type: TYPES.WEATHER_FETCH_FAILED, message: error.message });
  }
}

function* weatherSaga() {
  yield takeLatest(TYPES.WEATHER_FETCH_REQUESTED, fetchWeather);
}

export default weatherSaga;
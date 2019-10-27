import * as TYPES from '../types';

const initialState = {
  error: null,
  loading: true,
  data: null,
  toggle: false
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.WEATHER_FETCH_REQUESTED:
      return { ...state, loading: true };
    case TYPES.WEATHER_FETCH_SUCCEEDED:
      return { ...state, loading: false, data: { ...action.data } };
    case TYPES.WEATHER_FETCH_FAILED:
      return { ...state, loading: false, error: action.meassage };
    case TYPES.WEATHER_TOGGLE_TEMPERATURE:
      return { ...state, toggle: !state.toggle}
    default:
      return state;
  }
};

export default weatherReducer;
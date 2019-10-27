import weatherSaga from './weatherSaga';
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    weatherSaga(),
  ])
}

import { all, fork } from 'redux-saga/effects'
import { watchLoadingHotels, watchFilterHotels } from './sagas/hotels';

export default function* rootSaga() {
  yield all([fork(watchLoadingHotels),fork(watchFilterHotels)]);
}
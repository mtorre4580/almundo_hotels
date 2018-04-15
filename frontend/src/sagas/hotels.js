import { put, call, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes';
import HotelsAPI from '../services/HotelsAPi';
import ActionHotels from '../actions/ActionHotels';

const API = new HotelsAPI();

export function* getAllHotels() {
    try{
        const response = yield call(API.getHotels);
        yield put(ActionHotels.loadingHotelsSuccess(response.data));
    }catch(err){
        yield put(ActionHotels.loadingHotelsError(err));
    }
}

export function* getHotelsByFilter({filters}) {
    try{
        const response = yield call(API.getHotelsByFilter,filters);
        yield put(ActionHotels.loadingHotelsSuccess(response.data));
    }catch(err){
        yield put(ActionHotels.loadingHotelsError(err));
    }
}

export function* watchLoadingHotels() {
  yield takeLatest(types.LOADING_HOTELS, getAllHotels);
}

export function* watchFilterHotels(){
    yield takeLatest(types.FILTER_HOTELS, getHotelsByFilter);
}

export default { watchLoadingHotels, watchFilterHotels };
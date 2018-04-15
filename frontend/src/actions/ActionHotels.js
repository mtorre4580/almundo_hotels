import * as types from '../constants/ActionTypes';

export default class ActionHotels {

    static loadingHotels = () => ({type: types.LOADING_HOTELS});

    static loadingHotelsSuccess = hotels => ({type: types.LOADING_HOTELS_SUCCESS, hotels});

    static loadingHotelsError = error => ({type: types.LOADING_HOTELS_ERR, error});

    static filterHotels = filters => ({type: types.FILTER_HOTELS, filters});

}
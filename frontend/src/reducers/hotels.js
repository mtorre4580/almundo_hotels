import * as types from '../constants/ActionTypes';

let initalState = {
    hotels: [],
    loading: false,
    error: false
};

export default (state = initalState, { type, ...payload }) => {
    switch (type) {
        case types.LOADING_HOTELS:
            return {
                ...state,
                loading: true
            }
        case types.LOADING_HOTELS_SUCCESS:
            return {
                ...state,
                hotels: payload.hotels,
                error: false,
                loading: false
            }
        case types.LOADING_HOTELS_ERR:
            return {
                ...state,
                hotels: [],
                loading: false,
                error: true
            }
        case types.FILTER_HOTELS:
            return {
                ...state,
                hotels: [],
                loading: true,
                error:false
            }
        default:
            return state
    }
};
  
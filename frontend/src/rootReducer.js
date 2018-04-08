import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { hotels } from './reducers';

export default combineReducers({
    hotels,  
    form: formReducer,
    router: routerReducer
});




import movieReducer from './movieReducer';

import {combineReducers} from 'redux';

export default combineReducers({
    movieReducer: movieReducer
})
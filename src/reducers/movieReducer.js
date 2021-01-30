import Types from '../actions/actionTypes';

const initialState = {
    movies: [],
    searchMovies: [],
    likeListMovie: [],
    loading: false,
    refreshing: false,
    error: '',
}

export default movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.FECTH_LIST_MOVIES_REQUEST:
            return {
                ...state, 
                loading: true, 
                refreshing: true
            }
        case Types.FECTH_LIST_MOVIES_SUCCESS:
            return {
                ...state, 
                movies: state.movies.concat(action.payload), 
                loading: false, 
                refreshing: false
            
            }   
        case Types.FECTH_LIST_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case Types.REFRESH_LIST_MOVIES:
            return {
                ...state,
                refreshing: false
            }
        case Types.SEARCH_MOVIE_WITH_NAME_SUCCESS:
            return {
                ...state,
                searchMovies: action.payload,
                loading: false
            }
        case Types.LIKE_MOVIES:
            return {
                ...state,
                likeListMovie: state.likeListMovie.concat(action.payload),
            }
        case Types.UNLIKE_MOVIES:
            let arrMovie = state.likeListMovie.filter(item => item !== action.payload)
            return {
                ...state,
                likeListMovie: arrMovie,
            }
        default:
            return state;
        
    }
}
import Types from './actionTypes';
import axios from 'axios';

export const fetchList = (page) => {
    return async(dispatch) => {
        dispatch({type: Types.FECTH_LIST_MOVIES_REQUEST});
        try {
            const resultData = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f53527e98fc014aa24cfbb19ec63c42c&language=en-US&page=${page}`);
            const arr = resultData.data.results.map(item => {
                return {
                    ...item,
                    isLiked: false
                }
            });
            dispatch({type: Types.FECTH_LIST_MOVIES_SUCCESS, payload: arr});

        } catch(e) {
            console.log(e);
        }
    }
}

export const likeMovie = (movie) => {
    return (dispatch) => {
        try {
            movie.isLiked = true;
            dispatch({type: Types.LIKE_MOVIES, payload: movie});
        } catch(e) {
            console.log(e);
        }
    }
}

export const unLikeMovie = (movie) => {
    return (dispatch) => {
        try {
            movie.isLiked = false;
            dispatch({type: Types.UNLIKE_MOVIES, payload: movie})
        } catch(e) {
            console.log(e);
        }
    }
}
import Types from './actionTypes';
import axios from 'axios';

export const fetchList = (page) => {
    return async(dispatch) => {
        dispatch({type: Types.FECTH_LIST_MOVIES_REQUEST});
        try {
            const resultData = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f53527e98fc014aa24cfbb19ec63c42c&language=en-US&page=${page}`);
            dispatch({type: Types.FECTH_LIST_MOVIES_SUCCESS, payload: resultData.data.results});

        } catch(e) {
            console.log(e);
        }
    }
}

export const refreshControl = () => {
    fetchList(1);
}

export const searchMovieWithName = (query, movies) => {
    let a = movies.filter(item => item.title.includes(query))
    console.log(movies)

    return async(dispatch) => {


        const url = `https://api.themoviedb.org/3/search/movie?api_key=f53527e98fc014aa24cfbb19ec63c42c&query=${query}`
        try {
            const data = await axios.get(url);
            dispatch({type: Types.SEARCH_MOVIE_WITH_NAME_SUCCESS, payload: data.data.results});
        } catch(e) {
            console.log(e)
        }
    }
}

export const likeMovie = (movie) => {
    return (dispatch) => {
        try {
            dispatch({type: Types.LIKE_MOVIES, payload: movie});
        } catch(e) {
            console.log(e);
        }
    }
}

export const unLikeMovie = (movie) => {
    return (dispatch) => {
        try {
            dispatch({type: Types.UNLIKE_MOVIES, payload: movie})
        } catch(e) {
            console.log(e);
        }
    }
}
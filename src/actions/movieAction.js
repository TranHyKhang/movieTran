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
import environment from '../../config/env';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_TRENDING_MOVIES_SUCCESS, FETCH_TRENDING_MOVIES_REQUEST, FETCH_TRENDING_MOVIES_FAILED } from '../trending/types';


const TRENDING_MOVIES_END_POINT = environment.TRENDING_MOVIES_END_POINT;
const API_KEY = environment.API_KEY;


function* getTrendingMovies() {
    try {
        const response = yield call((() => axios.get(TRENDING_MOVIES_END_POINT, { params: { api_key: API_KEY } })));
        // let data = [];
        // for (let movie of response.data.results) {
        //     let { id, original_title, poster_path, overview } = movie;
        //     data.push({ id, original_title, poster_path, overview })
        // }
        yield put({ type: FETCH_TRENDING_MOVIES_SUCCESS, payload: response.data.results });
    } catch (error) {
        yield put({ type: FETCH_TRENDING_MOVIES_FAILED, payload: error.message });
    }
}

function* watcherTrendingMoviesSaga() {
    yield takeEvery(FETCH_TRENDING_MOVIES_REQUEST, getTrendingMovies);
}


export default watcherTrendingMoviesSaga;
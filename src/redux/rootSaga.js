import { all } from 'redux-saga/effects';
import watcherTrendingMoviesSaga from './sagas/trendingSaga';


export default function* rootSaga() {
    yield all([watcherTrendingMoviesSaga()])
}
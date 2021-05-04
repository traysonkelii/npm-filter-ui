import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types'
const apiUrl = 'https://api.npms.io/v2/search/suggestions'

async function getApi(queryString) {
    try {
        const res = await fetch(`${apiUrl}?q=${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.json();
    } catch (err) {
        throw err;
    }
}

function* fetchLibs(action) {
    try {
        const libs = yield call(getApi, action.queryString);
        yield put({ type: types.SEARCH_SUCCESS, results: libs })
    } catch (e) {
        yield put({ type: types.SEARCH_FAILURE, message: e.message })
    }
}

function* searchSaga() {
    yield takeEvery(types.SEARCH_REQUESTED, fetchLibs);
}

export default searchSaga;
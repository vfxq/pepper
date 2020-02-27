import {
    put, takeLatest, retry
} from 'redux-saga/effects';

import {
    getDataApi,
} from '@src/utils/apiServices/dataApi';

import {
    GET_DATA_START,
} from '../types';

import {
    getDataSuccess, getDataError,
} from '@src/store/actions/data'

export function* getDataSaga(){
    try {
        const response = yield retry(5, 1000, getDataApi, {});
        
	    yield put(getDataSuccess(response));
    } catch (error) {
	    yield put(getDataError(error));
    }
}

export function* watchData(){
    yield takeLatest(GET_DATA_START, getDataSaga);
}

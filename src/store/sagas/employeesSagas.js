import {
    put, takeLatest, retry
} from 'redux-saga/effects';

import {
    getEmpoyeesApi,
} from '@src/utils/apiServices/empoyeesApi';

import {
    GET_EMPLOYEES_START,
} from '../types';

import {
    getEmployeesSuccess, getEmployeesError,
} from '@src/store/actions/employees'

export function* getEmployeesSaga(){
    try {
        const response = yield retry(5, 1000, getEmpoyeesApi, {});
        
	    yield put(getEmployeesSuccess(response));
    } catch (error) {
	    yield put(getEmployeesError(error));
    }
}

export function* watchEmployees(){
    yield takeLatest(GET_EMPLOYEES_START, getEmployeesSaga);
}

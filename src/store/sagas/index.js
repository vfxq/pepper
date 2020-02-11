import { all } from 'redux-saga/effects'
import { watchEmployees } from './employeesSagas';

export default function* rootSaga(){
    yield all([
        watchEmployees(),
    ]) 
}

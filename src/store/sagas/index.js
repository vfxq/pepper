import { all } from 'redux-saga/effects'
import { watchData } from './dataSagas';

export default function* rootSaga(){
    yield all([
        watchData(),
    ]) 
}

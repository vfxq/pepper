
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import isDevelopment from '@src/utils/modes';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(isDevelopment){
   // middlewares.push(createLogger());
}

const store = createStore(
    reducers,
    undefined,
    composeWithDevTools(applyMiddleware(...middlewares)),
);
    
sagaMiddleware.run(rootSaga);
window.store = isDevelopment ? store : undefined;

export default store;
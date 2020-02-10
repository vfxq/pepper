
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import isDevelopment from '@src/utils/modes';
import rootSaga from './sagas/index';
import { loadState, saveState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistedState = loadState();

if(isDevelopment){
   // middlewares.push(createLogger());
}

const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

store.subscribe(() => {

    saveState({
        empoyeesData: store.getState().employees
    })
})
    
sagaMiddleware.run(rootSaga);
window.store = isDevelopment ? store : undefined;

export default store;
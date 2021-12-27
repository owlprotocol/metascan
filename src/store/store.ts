import { rootReducer as web3ReduxReducer, rootSaga as web3ReduxSaga } from '@leovigna/web3-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const reducers = combineReducers({
    web3Redux: web3ReduxReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(web3ReduxSaga);

export default store;

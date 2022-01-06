import { rootReducer as web3ReduxReducer, rootSaga as web3ReduxSaga } from '@leovigna/web3-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/appReducer';

const reducers = combineReducers({
    app: appReducer,
    web3Redux: web3ReduxReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(web3ReduxSaga);

export default store;

<<<<<<< HEAD
<<<<<<< HEAD
import { rootReducer as web3ReduxReducer, rootSaga as web3ReduxSaga } from '@leovigna/web3-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/appReducer';
=======
import { rootReducer as web3ReduxReducer, rootSaga as web3ReduxSaga, Network, Block } from '@leovigna/web3-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Web3 from 'web3';

const web3ReadOnly = new Web3(`wss://mainnet.infura.io/ws/v3/${process.env.REACT_APP_INFURA}`);
>>>>>>> 3da17e4 (Gets Nonce (transaction count) and current ETH value in EOA addresses. Added a param after account route -> /account/:accountAddr. Nonce and EOA balance based on this param)
=======
import { rootReducer as web3ReduxReducer, rootSaga as web3ReduxSaga } from '@leovigna/web3-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
>>>>>>> 7588638 (Abstracted away fetching into hook, removed store.dispatch in store file, just used useApp() instead, reverted linter changes)

const reducers = combineReducers({
    app: appReducer,
    web3Redux: web3ReduxReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(web3ReduxSaga);

export default store;

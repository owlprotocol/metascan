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

const reducers = combineReducers({
    app: appReducer,
    web3Redux: web3ReduxReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

store.dispatch(Network.create({ networkId: '1', web3: web3ReadOnly }));
store.dispatch(Block.subscribe({ networkId: '1' }));
sagaMiddleware.run(web3ReduxSaga);

export default store;

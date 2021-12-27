import { rootReducer as web3ReduxReducer, rootSaga as web3ReduxSaga, Network, Block } from '@leovigna/web3-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Web3 from 'web3';

const web3ReadOnly = new Web3(`wss://mainnet.infura.io/ws/v3/${process.env.REACT_APP_INFURA}`);

const reducers = combineReducers({
    web3Redux: web3ReduxReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

store.dispatch(Network.create({ networkId: '1', web3: web3ReadOnly }));
store.dispatch(Block.subscribe({ networkId: '1' }));
sagaMiddleware.run(web3ReduxSaga);

export default store;

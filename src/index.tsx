import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStoreWithPersistor } from '@owlprotocol/web3-redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const { store, persistor } = createStoreWithPersistor();
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor!}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

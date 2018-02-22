import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// ------------- Begin Redux Imports Here
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
// ------------- Begin External Files Imports Here
import App from './App';
import './components/styles/index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const reduxStore = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

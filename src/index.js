import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterGroup from './component/counters/CounterGroup';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import rootReducer from "./component/reducers";
import {Provider} from "react-redux";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <CounterGroup defaultCount='3'/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

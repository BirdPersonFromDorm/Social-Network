import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/redux-store'

export let render = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    render(state);
});

reportWebVitals();

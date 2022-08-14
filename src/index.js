import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import './firebase'
import {Provider} from "react-redux";
import reduxStore from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={reduxStore}>
            <App/>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();

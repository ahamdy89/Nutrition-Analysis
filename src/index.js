import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducers";
import ReduxThunk from 'redux-thunk';
import "antd/dist/antd.css";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './js/reducers/mainreducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById("root")
);
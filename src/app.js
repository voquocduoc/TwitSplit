import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose
} from 'redux';
import TwitSplit from './components/TwitSplit';
import rootReducer from './store/index.js';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware()
));
render(
	<Provider store={store}>
		<TwitSplit />
	</Provider>
	, document.querySelector('#app')
);

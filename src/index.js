import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

import './index.css';
import Application from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>, document.getElementById('app')
);
serviceWorker.unregister();

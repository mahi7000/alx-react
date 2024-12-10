import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import App from './App/App';
import { initialState, uiReducer } from './reducers/uiReducer';

const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
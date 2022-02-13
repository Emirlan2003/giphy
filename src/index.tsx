import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './css/index.css'
import { store } from './store/store';
const setUpStore = store()

ReactDOM.render(
  <Provider store={setUpStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


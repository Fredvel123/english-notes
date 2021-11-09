import React from 'react';
import ReactDOM from 'react-dom';
// styles css
import './index.css';
// components
import App from './App';
// redux
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
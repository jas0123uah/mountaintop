import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './context/Modal.css';

import './components/assets/carousel.css'
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import {SearchFilterProvider} from './context/SearchFilter';
const store = configureStore();
window.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
       <SearchFilterProvider>
        <App />
        </SearchFilterProvider>
      </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

});

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './context/Modal.css';

import './components/ProfilePage/carousel.css'
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
const store = configureStore();
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

});

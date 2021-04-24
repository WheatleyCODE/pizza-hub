import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout/Layout';
import './index.scss';
import { store } from './store/store';

const firebaseConfig = {
  apiKey: 'AIzaSyCybwd8_sQFZF95r1i7mLeZc-F8LkDR7mQ',
  authDomain: 'qb-pizza-hub.firebaseapp.com',
  projectId: 'qb-pizza-hub',
  storageBucket: 'qb-pizza-hub.appspot.com',
  messagingSenderId: '667772335160',
  appId: '1:667772335160:web:a9f2331bd577f8f7d062cd',
  measurementId: 'G-GYGVTT0JGJ',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

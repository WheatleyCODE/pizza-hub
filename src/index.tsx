import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Layout from '@components/Layout';
import store from './redux/store';
import './index.scss';

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
  <HashRouter>
    <Provider store={store}>
      <Layout />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

import firebase from 'firebase';

import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.error('hi', firebase.apps);
};

init();

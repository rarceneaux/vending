import firebase from 'firebase';

import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavBar/myNavBar';
import machine from './components/machine/machine';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  // console.error('hi', firebase.apps);
  machine.buildTheMachine();
};

init();

import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';
import s from './google.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button id="google-auth" class="">
    <img src="${s}"/>
  </button>`;
  utils.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };

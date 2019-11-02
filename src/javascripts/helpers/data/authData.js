import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNavbar = $('#navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      // someone is logged in we should not see auth component
      stockDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      authDiv.addClass('hide');
    } else {
      console.log(user);
      // logging out view
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide7');
    }
  });
};

export default { checkLoginStatus };

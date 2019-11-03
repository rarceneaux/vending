import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSnacksByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snacks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demSnacks = response.data;
      const snacks = [];
      Object.keys(demSnacks).forEach((snackA) => {
        demSnacks[snackA].id = snackA;
        snacks.push(demSnacks[snackA]);
      });
      resolve(snacks);
    // hard code
    })
    .catch((error) => reject(error));
});

export default { getSnacksByUid };

import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllSnackPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snackPositions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const demSnackPositions = response.data;
      const snackPositions = [];
      Object.keys(demSnackPositions).forEach((snackId) => {
        demSnackPositions[snackId].id = snackId;
        snackPositions.push(demSnackPositions[snackId]);
      });
      resolve(snackPositions);
    // hard code
    })
    .catch((error) => reject(error));
});

export default { getAllSnackPositionsByMachineId };

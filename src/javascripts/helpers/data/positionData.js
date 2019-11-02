import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/positions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const dempositions = response.data;
      const positions = [];
      Object.keys(dempositions).forEach((positionsId) => {
        dempositions[positionsId].id = positionsId;
        positions.push(dempositions[positionsId]);
      });
      resolve(positions[0]);
    // hard code
    })
    .catch((error) => reject(error));
});

export default { getAllPositionsByMachineId };

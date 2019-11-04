import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMachines = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/machines.json`)
    .then((response) => {
      const demMachines = response.data;
      const machines = [];
      Object.keys(demMachines).forEach((machineId) => {
        demMachines[machineId].id = machineId;
        machines.push(demMachines[machineId]);
      });
      resolve(machines[0]);
    // hard code
    })
    .catch((error) => reject(error));
});

export default { getMachines };

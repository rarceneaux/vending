import machineData from './machineData';
import positionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachines()
    .then((singleMachine) => positionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snacksPositions) => {
          console.log('snackPositions', snacksPositions);
          snackData.getSnacksByUid(snacksPositions[0].uId).then((snacks) => {
            const newPositions = [];
            positions.forEach((position) => {
              const newP = { ...position };
              const getSnackPosition = snacksPositions.find((x) => x.positionId === newP.id);
              if (getSnackPosition) {
                const snack = snacks.find((x) => x.id === getSnackPosition.snackId);
                newP.snack = snack;
              } else {
                newP.snack = {};
              }
              newPositions.push(newP);
            });
            resolve(newPositions);
          });
        });
    })
    .catch((error) => reject(error));
});

export default { getCompleteMachine };

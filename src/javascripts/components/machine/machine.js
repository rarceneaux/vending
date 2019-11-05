import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

import snack from '../snack/snack';
import './machine.scss';


const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2> Vending Machine</h2>';
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snack.makeASnack(position);
      });
      domString += '</div>';
      utils.printToDom('stock', domString);
    })
    .catch((error) => console.error(error));
  //   .then((singleMachine) => console.log('machine', singleMachine))
  //   .catch((error) => console.log(error));
  // // 1. get machines - returns first machine(hard coding)
  // 2 use machine id to get all positions for that machine
  // 3 use machineId to get all snack postions
  // 4 use uid of snackpos to get avail snacks for that machin3
  // 5 return an array of positions in order (a1,a2,a3) so positions should have position snack exist at that positin
};

export default { buildTheMachine };

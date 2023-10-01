import getRandomNumber from '../utils.js';
import run from '../index.js';
import * as constants from '../helpers.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progression = constants.generateProgression(constants.startNumProg, constants.step);
  const indexToHide = getRandomNumber(0, constants.maxIndexToProg);
  const answer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

const runGameProgression = () => run(description, generateRound);

export default runGameProgression;

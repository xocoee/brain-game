import getRandomNumber from '../utils.js';
import run from '../index.js';
import generateProgression from '../lib.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const maxLastIndex = 1;
  const startProgression = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(2, 8);
  const lengthProgression = getRandomNumber(5, 15);

  const progression = generateProgression(startProgression, stepProgression, lengthProgression);
  const indexToHide = getRandomNumber(0, progression.length - maxLastIndex);
  const answer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

const runGameProgression = () => run(description, generateRound);

export default runGameProgression;

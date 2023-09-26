import getRandomNumber from '../untils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < 8; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};
const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const step = 2;
  const progression = generateProgression(randomNumber, step);
  const indexToHide = getRandomNumber(0, 8 - 1);
  const answer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

const runGameProgression = () => run(description, generateRound);

export default runGameProgression;

import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const progersionLenght = getRandomNumber(5, 15); // change length brain-progression
const maxIndexToProg = progersionLenght - 1;
const generateProgression = (numberStartProg, stepToProg) => {
  const progression = [];
  for (let i = 0; i < progersionLenght; i += 1) {
    progression.push(numberStartProg + stepToProg * i);
  }
  return progression;
};
const generateRound = () => {
  const progression = generateProgression(getRandomNumber(1, 100), getRandomNumber(2, 8));
  const indexToHide = getRandomNumber(0, maxIndexToProg);
  const answer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

const runGameProgression = () => run(description, generateRound);

export default runGameProgression;
// const generateProgression = (startNum, stepToFunction) => {
//   const progression = [];
//   for (let i = 0; i < progersionLenght; i += 1) {
//     progression.push(startNum + stepToFunction * i);
//   }
//   return progression;
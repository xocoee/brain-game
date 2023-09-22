import getRandom from '../random.js';
import run from '../index.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 8;

const generateProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};
const getQuestionAndAnswer = () => {
  const randomNumber = getRandom(0, 100);
  const step = 2;
  const progression = generateProgression(randomNumber, step);
  const indexToHide = getRandom(0, progressionLength - 1);
  const correctAnswer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const runGameProgression = () => run(rules, getQuestionAndAnswer);

export default runGameProgression;

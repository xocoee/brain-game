import getRn from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const maxLastIndex = 2;
  const generateProgression = (numberStartProg, stepToProg, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(numberStartProg + stepToProg * i);
    }
    return progression;
  };

  const progression = generateProgression(getRn(1, 100), getRn(2, 8), getRn(5, 15));
  const indexToHide = getRn(0, progression.length - maxLastIndex);
  const answer = String(progression[indexToHide]);
  progression[indexToHide] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

const runGameProgression = () => run(description, generateRound);

export default runGameProgression;

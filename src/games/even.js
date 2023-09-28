import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, answer };
};

const runGameEven = () => run(description, generateRound);

export default runGameEven;

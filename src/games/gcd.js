import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  const smallNumber = Math.min(number1, number2);
  for (let i = smallNumber; i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  return { question, answer };
};

const runGameGCD = () => run(description, generateRound);

export default runGameGCD;

import getRandomNumber from '../untils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const smallNumber = Math.min(num1, num2);
  for (let i = smallNumber; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(getGCD(num1, num2));
  return { question, answer };
};

const runGameGCD = () => run(description, generateRound);

export default runGameGCD;

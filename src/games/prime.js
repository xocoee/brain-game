import getRandomNumber from '../untils.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const answer = isPrimeNumber(number) ? 'yes' : 'no';
  return { question, answer };
};

const runGamePrime = () => run(description, generateRound);

export default runGamePrime;

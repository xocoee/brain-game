import getRandom from '../random.js';
import run from '../index.js';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const primeNumber = (num) => {
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

const getQuestionAndAnswer = () => {
  const number = getRandom(1, 100);
  const question = String(number);
  const correctAnswer = primeNumber(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runGamePrime = () => run(rules, getQuestionAndAnswer);

export default runGamePrime;

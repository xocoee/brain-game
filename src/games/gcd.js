import getRandom from '../random.js';
import run from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const culcate = (num1, num2) => {
  const smallNumber = Math.min(num1, num2);
  for (let i = smallNumber; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(culcate(num1, num2));
  return { question, correctAnswer };
};

const runGameGCD = () => run(rules, getQuestionAndAnswer);

export default runGameGCD;

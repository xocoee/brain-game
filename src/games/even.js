import getRandom from '../random.js';
import run from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionEven = () => {
  const number = getRandom(0, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runGameEven = () => run(rules, getQuestionEven);

export default runGameEven;

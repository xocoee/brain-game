import getRandom from '../random.js';
import run from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandom(1, 100);
  const question = String(number);
  const correctUserAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctUserAnswer };
};

const runGameEven = () => run(rules, getQuestionAndAnswer);

export default runGameEven;

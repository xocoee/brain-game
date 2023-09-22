import getRandom from '../random.js';
import run from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionEven = () => {
  const num = getRandom(1, 100);
  const question = String(num);
  const correctUserAnswer = isEven(num) ? 'yes' : 'no';
  return { question, correctUserAnswer };
};

const runGameEven = () => run(rules, getQuestionEven);

export default runGameEven;

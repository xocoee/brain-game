import getRandom from '../random.js';
import run from '../index.js';

const rules = 'What is the result of the expression?';

const calc = (num1, num2, operationType) => {
  switch (operationType) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Operator not supported');
  }
};

const getOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * 3)];
};

const getQuestionAndAnswer = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const operator = getOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calc(num1, num2, operator));
  return { question, correctAnswer };
};

const runGameCalc = () => run(rules, getQuestionAndAnswer);

export default runGameCalc;

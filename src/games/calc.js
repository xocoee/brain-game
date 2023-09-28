import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operationType) => {
  switch (operationType) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(operationType);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const getOperator = operators[Math.floor(Math.random() * operators.length)];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${getOperator} ${number2}`;
  const answer = String(calculate(number1, number2, getOperator));
  return { question, answer };
};

const runGameCalc = () => run(description, generateRound);

export default runGameCalc;

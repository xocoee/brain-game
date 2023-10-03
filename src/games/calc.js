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
      throw new Error('Wrong operand!', operationType);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));
  return { question, answer };
};

const runGameCalc = () => run(description, generateRound);

export default runGameCalc;

import getRandomNumber from '../untils.js';
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
      throw new Error('Operator not supported');
  }
};

const generateRound = () => {
  const getOperatorIndex = 3;
  const getOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * getOperatorIndex)];
  };
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = getOperator();
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));
  return { question, answer };
};

const runGameCalc = () => run(description, generateRound);

export default runGameCalc;

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import correct from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const playGameCalc = () => {
  const correctAnswer = (num1, num2, operationType) => {
    switch (operationType) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error('Wrong operand!');
    }
  };
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const symbols = ['+', '-', '*'];
    const randomSymbols = symbols[Math.floor(Math.random() * 3)];
    const randomNumberOne = Math.floor(Math.random() * 100) + 1;
    const randomNumberTwo = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumberOne} ${randomSymbols} ${randomNumberTwo}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNumber = Number(userAnswer);
    const result = correctAnswer(randomNumberOne, randomNumberTwo, randomSymbols);
    if (userAnswerNumber === result) {
      correct();
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playGameCalc();

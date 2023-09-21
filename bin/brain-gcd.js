#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const playGameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const culcate = (num1, num2) => {
    const smallNumber = Math.min(num1, num2);
    for (let i = smallNumber; i > 1; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
    }
    return 1;
  };
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumberOne = Math.floor(Math.random() * 100) + 1;
    const randomNumberTwo = Math.floor(Math.random() * 100) + 1;
    const result = culcate(randomNumberOne, randomNumberTwo);

    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNumber = Number(userAnswer);

    if (userAnswerNumber === result) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswerNumber}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playGameGcd();

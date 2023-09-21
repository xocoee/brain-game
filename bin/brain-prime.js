#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const primeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playGamePrime = () => {
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
   
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === 'yes' && primeNumber(randomNumber)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (userAnswer === 'no' && !primeNumber(randomNumber)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (userAnswer === 'yes' && !primeNumber(randomNumber)) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    } else if (userAnswer === 'no' && primeNumber(randomNumber)) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      return;
    } else {
      console.log("Input error! 'yes' or 'no'");
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playGamePrime();

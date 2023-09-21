#!/usr/bin/env node

import readlineSync from 'readline-sync';
import correct from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const parityNum = (number) => number % 2 === 0;
const noParityNum = (number) => number % 2 !== 0;

const playGameEven = () => {
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === 'yes' && parityNum(randomNumber)) {
      correct();
      correctAnswersCount += 1;
    } else if (userAnswer === 'no' && noParityNum(randomNumber)) {
      correct();
      correctAnswersCount += 1;
    } else if (userAnswer === 'yes' && noParityNum(randomNumber)) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    } else if (userAnswer === 'no' && parityNum(randomNumber)) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      return;
    } else {
      console.log("Input error! 'yes' or 'no'");
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playGameEven();

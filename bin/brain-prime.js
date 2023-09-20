#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);

const playGamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isPresent = primeNumber.includes(randomNumber);

    if (userAnswer === 'yes' && isPresent) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (userAnswer === 'no' && !isPresent) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (userAnswer === 'yes' && !isPresent) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    } else if (userAnswer === 'no' && isPresent) {
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

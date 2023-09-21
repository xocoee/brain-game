#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const playGamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const primeNumber = (num) => {
      if (num < 2) {
        return false;
      }

      for (let i = 2; i <= num / 2; i += 1) {
        if (num % 1 === 0) {
          return false;
        }
      }
      return true;
    }

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    //const isPresent = primeNumber.includes(randomNumber);

    console.log(randomNumber);
    console.log(primeNumber(randomNumber));

  //   if (userAnswer === 'yes' && isPresent) {
  //     console.log('Correct!');
  //     correctAnswersCount += 1;
  //   } else if (userAnswer === 'no' && !isPresent) {
  //     console.log('Correct!');
  //     correctAnswersCount += 1;
  //   } else if (userAnswer === 'yes' && !isPresent) {
  //     console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
  //     return;
  //   } else if (userAnswer === 'no' && isPresent) {
  //     console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
  //     return;
  //   } else {
  //     console.log("Input error! 'yes' or 'no'");
  //     return;
  //   }
  // }
  // console.log(`Congratulations, ${userName}!`);
};

playGamePrime();

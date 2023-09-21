#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const playGameProgression = () => {
  console.log('What number is missing in the progression?');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 80) + 1;
    const resultNumber = [];
    const addTwo = (number) => {
      for (let i = 0; i < 8; i += 1) {
        resultNumber.push(number);
        number += 2;
      }
      return resultNumber;
    };
    addTwo(randomNumber);
    const randomIndex = Math.floor(Math.random() * resultNumber.length);
    const randomNumberIndex = resultNumber[randomIndex];
    const playerNumbers = resultNumber;
    const removed = playerNumbers.splice(randomIndex, 1, '..');
    const phrase = playerNumbers.join(' ');
    console.log(`Question: ${phrase}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNumber = Number(userAnswer);

    if (userAnswerNumber === randomNumberIndex) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${randomNumberIndex}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playGameProgression();

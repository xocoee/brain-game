#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

const playGameProgression = () => {
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 80) + 1;
    const resultNumber = [];
    const addTwo = (num) => {
      let numAdd = num;
      for (let i = 0; i < 8; i += 1) {
        resultNumber.push(numAdd);
        numAdd += 2;
      }
      return resultNumber;
    };
    addTwo(randomNumber);
    const randomIndex = Math.floor(Math.random() * resultNumber.length);
    const randomNumberIndex = resultNumber[randomIndex];
    const userResultNumber = resultNumber.slice(0);
    const showPlayerNumbers = userResultNumber.splice(randomIndex, 1, '..');
    const strToShowPlayerNumbers = showPlayerNumbers.join();
    const phrase = userResultNumber.join(' ');
    const riddledNumber = Number(strToShowPlayerNumbers);
    console.log(`Question: ${phrase}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerNumber = Number(userAnswer);
    if (userAnswerNumber === riddledNumber) {
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

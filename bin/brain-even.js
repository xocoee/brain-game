#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { salute } from "../src/cli.js";
import { welcomeUser } from './brain-games.js';

const parityNum = (number) => {
  return number % 2 === 0;
};
const noParityNum = (number) => {
  return number % 2 !== 0;
};

welcomeUser;
salute();

const playGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === 'yes' && parityNum(randomNumber) || userAnswer === 'no' && noParityNum(randomNumber)) {
      console.log('Correct!'),
      correctAnswersCount += 1;
    } else if (userAnswer === 'yes' && noParityNum(randomNumber)) {
      console.log("Correct answer was 'no'.");
      return;
    } else if (userAnswer === 'no' && parityNum(randomNumber)) {
      console.log("'yes' is wrong answer ;(.");
      return;
    } else {
      console.log("Input error! 'yes' or 'no'"); 
      return;
  }
}
console.log(`Congratulations! ${salute()}`);
};
playGame();
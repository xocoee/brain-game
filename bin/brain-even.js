#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const userYes = 'yes';
const userNo = 'no';
//start 1 answer
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Question: ' + randomNumber);
const userAnswer = readlineSync.question('You answer: ');
const trueNumber = (trueOfFalse) => {
    if (randomNumber % 2 === 0) return true;
    if (!randomNumber % 2 === 0) return false;
    return trueOfFalse;
};
const answerUser = (text) => {
  if (userAnswer === userYes && trueNumber(randomNumber) === true) return 'Correct!';
  else if (userAnswer === userYes && trueNumber(randomNumber) === false) return "Correct answer was 'no'.";
  if (userAnswer === userNo && trueNumber(randomNumber) === false) return 'Correct!';
  else if (userAnswer === userNo && trueNumber(randomNumber) === true) return "'yes' is wrong answer ;(."
  else if (userAnswer != userNo && userAnswer != userYes) return "Input error! 'yes' or 'no'";
};
console.log(answerUser());
//finish 1 answer
//start 2 answer
const randomNumber1 = Math.floor(Math.random() * 100) + 1;
console.log('Question: ' + randomNumber1);
const userAnswer1 = readlineSync.question('You answer: ');
const trueNumber1 = (trueOfFalse) => {
    if (randomNumber1 % 2 === 0) return true;
    if (!randomNumber1 % 2 === 0) return false;
    return trueOfFalse;
};
const answerUser1 = (text) => {
  if (userAnswer1 === userYes && trueNumber1(randomNumber1) === true) return 'Correct!';
  else if (userAnswer1 === userYes && trueNumber1(randomNumber1) === false) return "Correct answer was 'no'.";
  if (userAnswer1 === userNo && trueNumber1(randomNumber1) === false) return 'Correct!';
  else if (userAnswer1 === userNo && trueNumber1(randomNumber1) === true) return "'yes' is wrong answer ;(."
  else if (userAnswer1 != userNo && userAnswer1 != userYes) return "Input error! 'yes' or 'no'";
};
console.log(answerUser1());
//finish 2 answer
//start 3 answer
const randomNumber2 = Math.floor(Math.random() * 100) + 1;
console.log('Question: ' + randomNumber2);
const userAnswer2 = readlineSync.question('You answer: ');
const trueNumber2 = (trueOfFalse) => {
    if (randomNumber2 % 2 === 0) return true;
    if (!randomNumber2 % 2 === 0) return false;
    return trueOfFalse;
};
const answerUser2 = (text) => {
  if (userAnswer2 === userYes && trueNumber2(randomNumber2) === true) return 'Correct!';
  else if (userAnswer2 === userYes && trueNumber2(randomNumber2) === false) return "Correct answer was 'no'.";
  if (userAnswer2 === userNo && trueNumber2(randomNumber2) === false) return 'Correct!';
  else if (userAnswer2 === userNo && trueNumber2(randomNumber2) === true) return "'yes' is wrong answer ;(."
  else if (userAnswer2 != userNo && userAnswer2 != userYes) return "Input error! 'yes' or 'no'";
};
console.log(answerUser2());
//finish 3 naswer
import readlineSync from 'readline-sync';

const symbols = ["+", "-", "*"];
const randomSymbols = symbols[Math.floor(Math.random() * 3)]

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');


const playGame = () => {
    const correctAnswer = (first, second, operationType) => {
        if (operationType === '+') {
            return first + second;
        }
        else if (operationType === '-') {
            return first - second;
        }
        else if (operationType === '*') {
            return first * second;
        }
    };
    console.log('What is the result of the expression?');

    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
        const randomNumberOne = Math.floor(Math.random() * 100) + 1;
        const randomNumberTwo = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${randomNumberOne} ${randomSymbols} ${randomNumberTwo}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const userAnswerNumber = Number(userAnswer);
        const result = correctAnswer(randomNumberOne, randomNumberTwo, randomSymbols);

        if (userAnswerNumber === result) {
            console.log('Correct!'),
            correctAnswersCount += 1;
        } else {
            console.log("no");
            //`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
            return;
        }
    }
    console.log(`Congratulations! ${userName}`);
};

playGame()
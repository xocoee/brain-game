import readlineSync from 'readline-sync';

const run = async (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.info(`Hello, ${name}!`);
  console.info(description);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = generateRound();

    console.info(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.info(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.info(`Let's try again, ${name}!`);
      return;
    }
    console.info('Correct!');
  }
  console.info(`Congratulations, ${name}!`);
};

export default run;

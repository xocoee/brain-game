import readlineSync from 'readline-sync';

const run = async (rules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.info(`Hello, ${name}!`);
  const numberOfTrials = 3;
  let roundsLeft = numberOfTrials;
  console.info(rules);
  while (roundsLeft > 0) {
    const { question, answer } = getQuestionAndAnswer();

    console.info(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.info('Correct!');
    } else {
      console.info(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.info(`Let's try again, ${name}!`);
      return;
    }

    roundsLeft -= 1;
  }
  console.info(`Congratulations, ${name}!`);
};

export default run;

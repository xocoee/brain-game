import readlineSync from 'readline-sync';

const run = async (rules, getQuestionAndAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  console.info(`Hello, ${name}!`);
  const numberOfTrials = 3;
  let roundsLeft = numberOfTrials;
  console.info(rules);
  while (roundsLeft > 0) {
    const { question, correctAnswer } = getQuestionAndAnswer();

    console.info(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.info('Correct!');
    } else {
      console.info(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.info(`Let's try again, ${name}!`);
      return;
    }

    roundsLeft -= 1;
  }
  console.info(`Congratulations, ${name}!`);
};

export default run;

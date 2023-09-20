import readlineSync from 'readline-sync';

const salute = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};
export default salute;

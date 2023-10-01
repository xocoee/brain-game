import getRandomNumber from './utils.js';

// here you can change the length and step progression

export const progersionLenght = getRandomNumber(5, 15); // change length brain-progression
export const maxIndexToProg = progersionLenght - 1;
export const step = getRandomNumber(2, 8); // change step brain-progression
export const startNumProg = getRandomNumber(1, 100); // change number from start progression
export const generateProgression = (startNum, stepToFunction) => {
  const progression = [];
  for (let i = 0; i < progersionLenght; i += 1) {
    progression.push(startNum + stepToFunction * i);
  }
  return progression;
};

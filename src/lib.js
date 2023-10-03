const generateProgression = (numberStartProg, stepToProg, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(numberStartProg + stepToProg * i);
  }
  return progression;
};

export default generateProgression;

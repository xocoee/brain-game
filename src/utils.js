function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomNumber;

// const getRandomNumber = (min, max) => {
//   const minNumber = Math.ceil(min);
//   const maxNumber = Math.floor(max);
//   return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
// };

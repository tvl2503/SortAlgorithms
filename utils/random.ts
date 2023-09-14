const getRandomCharacter = () => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
};

const getRandomString = (minLength: number, maxLength: number) => {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomCharacter();
  }
  return result;
};

export const generateRandomArray = (length: number) => {
  const randomArray: string[] = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomString(1, 5));
  }
  return randomArray;
};

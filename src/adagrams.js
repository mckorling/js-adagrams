const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const drawLetters = () => {
  const hand = [];
  const letterPoolCopy = { ...LETTER_POOL };
  while (hand.length < 10) {
    const num = Math.floor(Math.random() * 26);
    const letter = ALPHABET[num];
    if (letterPoolCopy[letter] > 0) {
      hand.push(letter);
      letterPoolCopy[letter]--;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersObj = {};
  for (let char of lettersInHand) {
    if (char in lettersObj) {
      lettersObj[char]++;
    } else {
      lettersObj[char] = 1;
    }
  }
  for (let char of input) {
    if (char in lettersObj) {
      lettersObj[char]--;
      if (lettersObj[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};

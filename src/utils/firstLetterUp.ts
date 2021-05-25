const firstLetterUp = (str: string): string =>
  str
    .split('')
    .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
    .join('');

export default firstLetterUp;

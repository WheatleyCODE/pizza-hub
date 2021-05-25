const minutesCorrect = (min: number) => {
  const minutes = [
    'минут',
    'минута',
    'минуты',
    'минуты',
    'минуты',
    'минут',
    'минут',
    'минут',
    'минут',
    'минут',
  ];

  return minutes[min % 10];
};

export default minutesCorrect;

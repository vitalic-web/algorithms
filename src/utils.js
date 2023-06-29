// алгоритм Фишера-Йетса для перемешивания упорядоченного массива
export const shuffleArray = (array) => {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]]; // меняем местами элементы
  }
  return array;
};

export const getShuffledArray = (size) => {
  const sortedArray = Array.from(Array(size).keys());
  return shuffleArray(sortedArray);
};

function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(num => num % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((num, index) => collection.indexOf(num, 0) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };

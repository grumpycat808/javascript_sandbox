function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  if (fromIndex >= array.length) fromIndex = array.length - 1;

  if (fromIndex < 0) {
    if (Math.abs(fromIndex) >= array.length) {
      fromIndex = 0;
    } else {
      fromIndex = array.length - Math.abs(fromIndex);
    }
  }

  for (let index = fromIndex; index >= 0; index--) {
    const element = array[index];
    if (predicate(element)) return index;
  }

  return -1;
}

const arr = [5, 4, 3, 2, 1];
console.log(findLastIndex(arr, (num) => num > 2, -10));

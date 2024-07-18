function fill(array, value, start = 0, end = array.length) {
  if (start < 0) {
    start = array.length - Math.abs(start);
  }
  if (end > array.length) {
    end = array.length;
  }
  if (end < 0) end = array.length - Math.abs(end);

  for (let index = start; index < end; index++) {
    array[index] = value;
  }
  return array;
}
fill([4, 6, 8, 10, 12], "*", -3, -1); // [4, 6, '*', '*', 12]

function countBy(array, iteratee) {
  const grouped = array.reduce((accumulator, currentVAl) => {
    const result = iteratee(currentVAl);
    if (accumulator.hasOwnProperty(result)) {
      accumulator[result] = accumulator[result] + 1;
    } else {
      accumulator[result] = 1;
    }
    return accumulator;
  }, {});
  return grouped;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));

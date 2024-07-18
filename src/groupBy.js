function groupBy(array, iteratee) {
  if (!array.length) return {};
  return array.reduce((accumulator, currentVal) => {
    const result = iteratee(currentVal);

    if (accumulator.hasOwnProperty(result)) {
      accumulator[result].push(currentVal);
    } else {
      accumulator[result] = [currentVal];
    }
    return accumulator;
  }, {});
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));

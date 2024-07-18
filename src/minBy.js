function maxBy(array, iteratee) {
  if (!array.length) return undefined;
  let max = array[0];
  array.forEach((element) => {
    const result = iteratee(element);
    if (!iteratee(max) || result > iteratee(max)) max = element;
  });

  return iteratee(max) ? max : iteratee(max);
}

console.log(maxBy([], (o) => o.m));

const testObj = {
  undefined: "Hello",
};

console.log(testObj);

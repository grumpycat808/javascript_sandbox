function mean(array) {
  if (array.length === 0) return NaN;
  const total = array.reduce((prev, current) => prev + current);

  return total / array.length;
}

function range(start = 0, end, step = 1) {
  if (!end) end = start;

  if (start === end) return [];
  if (step <= 0) step = 1;
  const returnArr = [];
  let k = 0;
  if (end > 0) {
    for (let i = start; i < end; i++) {
      k = i + step;
      returnArr.push(i);
    }
  } else {
    step = Math.abs(step);
    for (let i = start; i > end; i--) {
      k = i + step;
      returnArr.push(i);
    }
  }
  console.log("returnArr", returnArr);
}
range(1, 4, 0);

function once(func) {
  let invoked = false;

  let result;
  return function (...args) {
    console.log("this", this);
    const context = this;
    func = func.bind(context);
    if (!invoked) {
      invoked = true;
      result = func(...args);
      return result;
    } else {
      return result;
    }
  };
}
const onced = once(function (val) {
  return this.multiplier * val;
});

const obj = { multiplier: 5, mul: onced };
console.log(obj.mul(7));
console.log(obj.mul(10));

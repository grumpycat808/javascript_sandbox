function setCancellableTimeout(callback, delay, ...args) {
  const timeoutID = setTimeout(() => {
    return callback(...args);
  }, delay);
  const cancel = () => {
    clearTimeout(timeoutID);
  };

  return cancel;
}
console.log("Start");
let i = 0;
// t = 0:
console.log("i", i);
const cancel = setCancellableTimeout(() => {
  i++;
  console.log("i", i);
}, 1000);

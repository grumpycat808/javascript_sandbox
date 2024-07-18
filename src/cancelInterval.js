function setCancellableInterval(callback, delay, ...args) {
  let intervalId = setInterval(() => {
    callback(...args);
  }, delay);

  const cancel = () => {
    clearInterval(intervalId);
  };
  return cancel;
}

let i = 0;

const cancel = setCancellableInterval(() => {
  i++;
}, 10);

setTimeout(() => {
  cancel();
  console.log("i: ", i);
}, 35);

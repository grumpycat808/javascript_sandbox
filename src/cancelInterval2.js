function setCancellableInterval(callback, delay, ...args) {
  let interval = setInterval(() => {
    callback(...args);
  }, delay);
  return () => clearInterval(interval);
}

// t = 0:
let i = 1;
let count = 0;

const cancel = setCancellableInterval(
  (foo, bar) => {
    count++;
    i += foo;
    i *= bar;
    console.log("foo", foo);
    if (count === 1) {
      console.log("i line 21", i);
    }

    if (count === 2) {
      console.log("i line 25", i);
      cancel();
    }
  },
  10,
  2,
  7
);
// t = 10: i is 1
// t = 20: i is 2
// cancel(); // Called at t = 25
console.log(i);

setTimeout(() => {
  cancel();
}, 2000);

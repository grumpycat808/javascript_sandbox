window.onload = () => {
  let i = 21;
  const increment = debounce((a, b) => {
    i += a * b;
  }, 10);

  //   function increment(this, incrementVal) {
  //     this.val += incrementVal;
  //   }
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }

  const obj = {
    val: 2,
    increment,
  };
  console.log("i", i);
  increment(3, 7);
  console.log("i", i);
  setTimeout(() => {
    console.log("i in setTimeout", i);
  }, 20);
};
/**
test('called once', (done) => {
      let i = 21;
      const increment = debounce((a: number, b: number) => {
        i += a * b;
      }, 10);

      expect(i).toBe(21);
      increment(3, 7);
      expect(i).toBe(21);

      setTimeout(() => {
        expect(i).toBe(42);
        done();
      }, 20);
    });

 */

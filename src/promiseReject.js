function promiseReject(reason) {
  // const promise = new Promise((resolve, reject) => {});
  // return () => {
  //   console.log("Here");
  //   Promise.reject(new Error("fail"));
  // };
  const test = new Promise((resolve, reject) => {
    reject(reason);
  });
  return test;
}

try {
  console.log("Start");
  Promise.reject("Mayday!");
} catch (err) {
  console.log(err); // Mayday!
}

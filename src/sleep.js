function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

sleep(1000).then(() => {
  console.log("Bye."); // Only logs after 2000 milliseconds (2 seconds)
});

async function greeting() {
  console.log("Hello!");
  await sleep(2000);
  console.log("Bye."); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();

const defaultTextInput = document.querySelector("input");
const defaultText = document.getElementById("default-text");

defaultTextInput.addEventListener("input", (event) => {
  updateText(event.target.value);
});

const debounce = (callback, timeout) => {
  let timeoutId;

  timeoutId = setTimeout(() => {
    return (...args) => {
      callback(...args);
    };
  }, timeout);
  return timeoutId;
};
const updateText = (text) => {
  let timeoutID;
  if (timeoutID) clearTimeout(timeoutID);
  timeoutID = debounce(() => {
    console.log("text", text);
    defaultText.textContent = text;
  }, 1000);
};

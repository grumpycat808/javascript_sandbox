window.onload = () => {
  const defaultText = document.getElementsByClassName("default-text")[0];
  const debounceText = document.getElementsByClassName("debounce-text")[0];
  const inputElem = document.querySelector("input");

  inputElem.addEventListener("input", updateValue);

  function updateValue(e) {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
  }

  const updateDebounceText = debounce((text) => {
    debounceText.textContent = text;
  });

  function debounce(callback, delay = 1000) {
    let timeout;
    //this is the function that is referenced by updateDebounceText on line 10
    //waits for the delay, and THEN takes the arguments passes it into the function on line 21 (maybe??)
    return (args) => {
      console.log("args line 23", args);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(args);
        callback(args);
      }, delay);
    };
  }
};

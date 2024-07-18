function listFormat(items, options) {
  let returnStr = "";
  if (items.length === 0) return "";
  if (items.length === 1) return `${items[0]}`;
  let namesArr = [...items];
  if (options && options.unique) {
    namesArr = [...new Set(items)];
  }

  if (options && options.sorted) {
    namesArr = namesArr.sort((a, b) => a.localeCompare(b));
  }

  if (options && options.length > 0) {
    namesArr.splice(options.length);
    namesArr.forEach((name, index) => {
      if (index < namesArr.length - 1) returnStr = returnStr + `${name}, `;
    });
    if (items.length - options.length === 1) {
      returnStr = returnStr + `${namesArr[namesArr.length - 1]} and 1 other`;
    } else if (items.length - options.length > 1) {
      returnStr =
        returnStr +
        `${namesArr[namesArr.length - 1]} and ${
          items.length - options.length
        } others`;
    } else {
      returnStr = returnStr + `and ${namesArr[namesArr.length - 1]}`;
    }
  } else {
    namesArr.forEach((name, index) => {
      if (index < namesArr.length - 1) {
        returnStr = returnStr + `${name}, `;
      } else {
        returnStr = returnStr.slice(0, -2);
        returnStr = returnStr + ` and ${namesArr[namesArr.length - 1]}`;
      }
    });
  }
  return returnStr;
}

let names = ["Bob", "Ben", "Tim", "Bob", "Anna", "Bob", "Bob"];

console.log(listFormat(names));

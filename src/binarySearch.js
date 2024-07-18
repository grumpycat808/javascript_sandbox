function binarySearch(arr, target) {
  let middle = Math.floor(arr.length / 2);
  let floor = 0;
  let ceiling = arr.length - 1;
  while (middle >= floor) {
    console.log(arr[middle]);
    if (arr[middle] === target) return middle;
    if (arr[middle] > target) {
      ceiling = middle - 1;
      middle = Math.floor((ceiling - floor) / 2);
    } else {
      floor = middle + 1;
      middle = Math.floor((ceiling - floor) / 2) + floor;
    }
  }
  return -1;
}

console.log(binarySearch([1], 1));

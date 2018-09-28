module.exports = function longestConsecutiveLength(array) {
  array.sort((a, b) => a - b);
  let k = 0;
  let stack = [];
  let consecutiveLength = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] == array[i - 1]) {
      continue;
    }
    if (array[i] == array[i - 1] + 1) {
      stack.push(array[i]);
      //console.log(stack);

    } else {

      stack = [];
      stack.push(array[i]);
      //console.log(stack);
    }
    if (stack.length > consecutiveLength) {
      consecutiveLength = stack.length;
    }
  }
  return consecutiveLength;
}

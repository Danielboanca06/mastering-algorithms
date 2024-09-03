/**
 * @param {number} columnNumber
 * @return {string}
 */

const convertToTitle = function (columnNumber) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  while (columnNumber > 0) {
    columnNumber--;
    result = alpha[columnNumber % 26] + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

console.log(convertToTitle(1)); // 'A'
console.log(convertToTitle(26 * 2)); // "AB"
console.log(convertToTitle(99814)); // 'AAZ'

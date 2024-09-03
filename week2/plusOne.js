/**
 * @param {number[]} digits
 * @return {number[]}
 *
 *  O(log10(n) + n)
 */
var plusOne = function (digits) {
  digits = parseInt(digits.join(""));

  digits += 1;
  return digits
    .toString()
    .split("")
    .map((digit) => parseInt(digit));
};

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([9]));

const plusOneo = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);

  return digits;
};
console.log(plusOneo([1, 2, 3]));
console.log(plusOneo([9]));
console.log(plusOneo([9, 8, 9]));

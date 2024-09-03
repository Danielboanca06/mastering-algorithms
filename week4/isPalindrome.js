/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  t = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  s = t;
  let reversed = t.split("").reverse().join("");

  return reversed === s;
};

console.log(isPalindrome("race a car"));

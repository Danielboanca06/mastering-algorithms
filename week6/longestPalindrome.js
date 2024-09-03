/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};
  for (const letter of s) {
    map[letter] = (map[letter] || 0) + 1;
  }

  let evenCount = 0;
  let oddCount = 0;
  let hasOdd = false;

  for (const count of Object.values(map)) {
    if (count % 2 === 0) {
      evenCount += count;
    } else {
      oddCount += count - 1;
      hasOdd = true;
    }
  }

  return evenCount + oddCount + (hasOdd ? 1 : 0);
};

console.log(longestPalindrome("aaabbbccccdd"));
console.log(longestPalindrome("aA"));

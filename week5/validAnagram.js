/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let l of t) {
    if (l in charCount) {
      charCount[l]--;
    } else {
      return false;
    }
  }
  for (let char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
// console.log(isAnagram("a", "ab"));

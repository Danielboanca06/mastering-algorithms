/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s == "") return 0;
  let total = 0;
  let start = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1;
    }
    map.set(s[i], i);
    total = Math.max(total, i - start + 1);
  }
  return total || 1;
};

console.log(lengthOfLongestSubstring("abba")); // output 3

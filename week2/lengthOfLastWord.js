/**
 * @param {string} s
 * @return {number}
 * 
 * Question:
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

    A word is a maximal 
    substring
    consisting of non-space characters only.


 */

//time complex = O(1).
const lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("   fly me   to   the moon  "));

console.log(lengthOfLastWord("VPtCBexbhyOqEHWMpF  VJOZpC"));

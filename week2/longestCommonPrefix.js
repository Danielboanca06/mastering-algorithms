/**
 * @param {string[]} strs
 * @return {string}
 *
 * my solution:
 *
 * Overall,
 * the time complexity of the provided solution is O(n * m_avg),
 * where n is the number of strings in strs and m_avg is the average length of the strings.
 */

const longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs.join();
  let longest = "";
  let temp = strs[0];

  if (strs.length === 1) return temp;

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      const current = strs[i][j];
      const t = temp[j];

      if (j > 0 && longest === "") {
        break;
      }

      if (current === t || t === "") {
        longest += current;
      } else if (j > 0) {
        break;
      }
    }
    temp = longest;
    longest = "";
  }
  return temp;
};

console.log(longestCommonPrefix(["g"]));

console.log(longestCommonPrefix(["cir", "car"]));

// most optimal solution

var longestCommonPrefixo = function (strs) {
  let res = strs[0];
  for (let str of strs) {
    while (str.indexOf(res) != 0) {
      console.log(res.substring(0, res.length - 1));
      res = res.substring(0, res.length - 1);
      
    }
  }
  return res;
};


console.log(longestCommonPrefixo(["flower", "flow", "flight"]));
console.log(longestCommonPrefixo(["dog", "racecar", "car"]));

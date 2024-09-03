/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let start = 1;
    let end = n;
    let y = 1;
    while (start <= end) {
      let mid = ~~((end + start) / 2);
      if (isBadVersion(mid)) {
        //it is a bad v
        end = mid - 1;
      } else {
        //it is a good v
        start = mid + 1;
      }
    }
    return end + 1;
  };
};

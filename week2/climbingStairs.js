/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  let dp = new Array(n).fill(-1);
  console.log(dp);
  dp[0] = 1;
  dp[1] = 2;
  console.log(dp);
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};

console.log(climbStairs(3));
console.log(climbStairs(2));
console.log(climbStairs(4));

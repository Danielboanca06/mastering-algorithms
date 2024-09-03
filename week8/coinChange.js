/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   const dp = new Array(amount + 1).fill(Infinity);
//   dp[0] = 0; // Base case: 0 coins needed to make amount 0

//   for (let coin of coins) {
//     // loop throught the coins e.g [1, 2, 5, ...]
//     for (let i = coin; i <= amount; i++) {
//       // Calculate minimum coins required for each amount

//       dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//     }
//     console.log(dp);
//   }

//   return dp[amount] === Infinity ? -1 : dp[amount];
// };

var coinChange = function (coins, amount) {
  const memo = new Map(); // Use a map for memoization

  const dfs = (remaining) => {
    if (remaining < 0) return -1; // Base case: not possible to form the amount
    if (remaining === 0) return 0; // Base case: zero coins needed to make zero amount

    if (memo.has(remaining)) return memo.get(remaining); // Return memoized result if exists

    let minCoins = Infinity;

    for (let coin of coins) {
      const result = dfs(remaining - coin);

      console.log(remaining, result, minCoins);

      if (result >= 0) {
        minCoins = Math.min(minCoins, result + 1); // Update the minimum coins needed
      }
    }

    memo.set(remaining, minCoins === Infinity ? -1 : minCoins); // Memoize the result
    console.log(memo.get(remaining));
    return memo.get(remaining);
  };

  return dfs(amount);
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
// console.log(coinChange([186, 419, 83, 408], 6249));

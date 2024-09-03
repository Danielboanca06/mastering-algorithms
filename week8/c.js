/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  let dic = {};

  for (const coin of coins) {
    dic[coin] = 0;

    console.log(dic);

    while (dic[coin] <= amount) {
      if (dic[coin] + coin > amount) {
        //there is a remainder
        const remainder = dic[coin] + coin - amount;
        if (coins.includes(remainder)) {
          dic[coin] += remainder;
        } else {
          //   const coinsNeeded = coinChange(coins, remainder);
          //   dic[coin] += coinsNeeded;
          console.log(remainder);
          break;
        }
      } else {
        dic[coin] = dic[coin] + coin;
        console.log(dic);
      }
    }
  }
  let minCoin = Infinity;
  for (const coin of dic) {
    Math.min(minCoin, coin);
  }
  return minCoin;
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
// console.log(coinChange([186, 419, 83, 408], 6249));

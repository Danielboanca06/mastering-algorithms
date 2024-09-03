/**
 * @param {number[]} prices
 * @return {number}
 */
// my desgin too slow 
// var maxProfit = function (prices) {
//   order = prices
//     .map((p, i) => ({ price: p, index: i }))
//     .sort((a, b) => a.price - b.price);

//   let lowest = 0;

//   for (let i = 0; i < order.length; i++) {
//     for (let j = order.length - 1; j > 0; j--) {
//       if (order[i].index < order[j].index) {
//         let num =
//           order[j].price - order[i].price < 0
//             ? 0
//             : order[j].price - order[i].price;
//         if (num > lowest) {
//           lowest = num;
//         }
//       }
//     }
//   }
//   return lowest;
// };

var maxProfit = function(prices) {
    let minPrice = Infinity; // Initialize with the maximum possible value
   let maxProfit = 0;
 
   for (let i = 0; i < prices.length; i++) {
     // Update the minimum price seen so far
     minPrice = Math.min(minPrice, prices[i]);
 
     // Calculate the potential profit with the current price and minimum price
     const potentialProfit = prices[i] - minPrice;
 
     // Update the maximum profit seen so far
     maxProfit = Math.max(maxProfit, potentialProfit);
   }
 
   return maxProfit;
 };
4

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 4, 1]));

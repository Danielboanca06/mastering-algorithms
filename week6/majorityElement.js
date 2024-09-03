//

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  return candidate;
};

console.log(majorityElement([2, 3, 2]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], { oc: map.get(nums[i]).oc + 1, in: i });
    } else {
      map.set(nums[i], { oc: 1, in: i });
    }
  }
  const lowest = [...map.values()];
  for (l of lowest) {
    if (l.oc === 1) {
      return nums[l.in];
    }
  }
};

console.log(singleNumber([2, 2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // Sort the array to easily handle duplicates
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      // Avoid duplicates
      let left = i + 1;
      let right = nums.length - 1;
      const target = -nums[i]; // Finding two elements that sum up to this target
      while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Avoid duplicates
          while (left < right && nums[right] === nums[right - 1]) right--; // Avoid duplicates
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // output [[-1,-1,2],[-1,0,1]]

const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (target < nums[i]) {
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 2));

var searchInserto = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (target > nums[mid]) left = mid + 1;
    else right = mid;
  }

  return left;
};

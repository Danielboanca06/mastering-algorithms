const removeDuplicates = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      // it already exists
      nums.splice(i, 1);
      i--;
    } else {
      map.set(nums[i], i);
    }
  }

  return nums.length;
};

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const removeDups = (nums) => {
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[current] = nums[i];
      current++;
    }
  }
  return current;
};

console.log(removeDups([1, 1, 2]));

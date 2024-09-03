// leet code number : 1

// My Solution
// time complexity : O(n)

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const num = target;
    const first = num - nums[i];
    console.log(first);
    const second = first - nums[i + 1];
    console.log(second);

    if (second === 0) return [i, i + 1];
  }
};

const result = twoSum([2, 7, 11, 15], 9);
const result2 = twoSum([3, 2, 4], 6);

//time complexity O(n)

const twoSumMap = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

const resultMap = twoSumMap([2, 7, 11, 15], 9);
const resultMap2 = twoSumMap([3, 2, 4], 6);

console.log(resultMap, resultMap2);

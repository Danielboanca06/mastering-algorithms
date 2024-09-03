def two_Sum(nums, target):
    for i in range(len(nums) -1):
        t = target
        f = t - nums[i]
        s = f - nums[i+1]

        if s is 0: 
            return [i, i+1]


print(two_Sum([2, 7, 11, 15], 9))
print(two_Sum([3, 2, 3], 6))


def twoSumMap(nums, target):
    num_map = {}

    for i in range(len(nums)):
        complement = target - nums[i]

        if complement in num_map:
            return [num_map[complement], i]

        num_map[nums[i]] = i

print(twoSumMap([2, 7, 11, 15], 9))
print(twoSumMap([3, 2, 3], 6))
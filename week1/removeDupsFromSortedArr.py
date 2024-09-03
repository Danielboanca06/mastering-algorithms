def removeDups(nums):
    current = 0
    for i in range(len(nums)):
        if i == len(nums) - 1 or nums[i] != nums[i+1]:
            nums[current] = nums[i]
            current += 1
    return current

print(removeDups([1, 1, 2]))  # Output: 2
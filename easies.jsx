// 1. Contains Duplicate (9:51)
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function Duplicate(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === undefined) {
            map.set(nums[i], i)
        } else {
            return true
        }
    }
    return false
}

// console.log(Duplicate([1,2,3,1]))
// console.log(Duplicate([1,2,3,4]))
// console.log(Duplicate([1,1,1,3,3,4,3,2,4,2]))

// -------------------------------------------------------------------

// 2. Two Sum 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function TwoSum(nums, target) {
    const map = new Map()
    const ansArray = []
    for (let i = 0; i <= (nums.length - 1); i++) {
        if (map.get(nums[i]) !== undefined) {
            ansArray.push(i)
            ansArray.push(map.get(nums[i])[1])
        } else {
            map.set(target - nums[i], [nums[i], i])
        }
    } 
    return ansArray
}

console.log(TwoSum([2,7,11,15], 9))
console.log(TwoSum([3,2,4], 6))
console.log(TwoSum([3,3], 6))
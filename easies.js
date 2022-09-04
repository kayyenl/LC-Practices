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
        if (map.has(nums[i])) {
            ansArray.push(i)
            ansArray.push(map.get(nums[i]))
        } else {
            map.set(target - nums[i], i)
        }
    } 
    return ansArray
}

// console.log(TwoSum([2,7,11,15], 9))
// console.log(TwoSum([3,2,4], 6))
// console.log(TwoSum([3,3], 6))

// -------------------------------------------------------------------

// 3. Best time to buy and sell stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function BuySell(prices) {
    const priceLen = prices.length
    let leftp = 0
    let rightp = priceLen - 1
    let profit = 0

    while (leftp < rightp) {
        profit = Math.max(profit, prices[rightp] - prices[leftp])
        if (prices[leftp] > prices[rightp]) {
            leftp += 1
        } else {
            rightp -= 1
        }
    }
    return profit
}
// console.log(BuySell([7,1,5,3,6,4]))
// console.log(BuySell([7,6,4,3,1]))

function BuyBrute(prices) {
    let profit = 0

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            profit = Math.max(profit, prices[j] - prices[i])
        }
    }
    return profit
}
// BuyBrute was TLE
// console.log(BuyBrute([7,1,5,3,6,4]))
// console.log(BuyBrute([7,6,4,3,1]))

function BuyLessBrute(prices) {
    let profit = 0
    let investCost = 0
    let prevCost

    for (let i = 0; i < prices.length; i++) {
        if (i == 0) {
            investCost = prices[0]
        } else {
            investCost = Math.min(prices[i], prevCost)
        }
        if (investCost !== prevCost) {
            for (let j = i + 1; j < prices.length; j++) {
                profit = Math.max(profit, prices[j] - prices[i])
            }
        }
        prevCost = investCost
    }
    return profit
}

// console.log(BuyLessBrute([7,1,5,3,6,4]))
// console.log(BuyLessBrute([7,6,4,3,1]))
// console.log(BuyLessBrute([0,3,8,6,8,6,6,8,2,0,2,7]))


function BuySellOptimal(prices) {
    let profit = 0
    let lp = 0
    let rp = 1
    let maxProfit = 0 
    let currProfit

    while (rp < prices.length) {
        currProfit = prices[rp] - prices[lp]
        maxProfit = Math.max(maxProfit, currProfit)
        if (prices[rp] > prices[lp]) {
            rp += 1
        } else {
            lp = rp
            rp += 1
        }
    }
    return maxProfit
}

// -------------------------------------------------------------------
// 4. Palindrome Number
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(x) {
    if (x < 0) return false;
    const numArr = x.toString().split("")
    let firstNum, lastNum
    while (numArr.length > 1) {
        firstNum = numArr.shift()
        lastNum = numArr.pop()
        if (firstNum != lastNum) return false
    } return true
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
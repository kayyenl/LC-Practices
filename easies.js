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

// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(10))


// -------------------------------------------------------------------

// 5. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function commonPrefix(strs) {
    let returnStr = ""
    let continueWhile = true
    let counter = -1
    let inLoopCount = 0
    const set = new Set()
    while (continueWhile) {
        counter += 1
        strs.map((str) => {
            set.add(str.slice(counter, counter + 1))
            inLoopCount += 1
        })
        console.log("hello")
        if (set.size === 1 
            && !set.has(undefined) && inLoopCount == strs.length) {
                console.log("hi there")
                returnStr += [...set][0]
                set.clear()
            } else {continueWhile = false}
            inLoopCount = 0
        } return returnStr
    }
    
    // console.log(commonPrefix(["flower","flow","flight"]))
    // console.log(commonPrefix(["dog","racecar","car"]))
    // console.log(commonPrefix([""]))
    
    function commonPrefix2(strs) {
        let bringingString = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(bringingString) !== 0) {
            bringingString = bringingString.substring(0, bringingString.length - 1)
        }
    } return bringingString
}

// console.log(commonPrefix2(["flower","flow","flight"]))
// console.log(commonPrefix2(["dog","racecar","car"]))
// console.log(commonPrefix2(["c","acc","ccc"]))

// ------------------------------------------------------------------
// 6. Longest Continuous Increasing Subsquence
// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].


// Example 1:
// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.

// Example 2:
// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

function LargestContInSubs(nums) {
    let currRes = 1
    let nextNum
    let currNum = nums[0]
    let maxRes = 1
    for (let i = 1; i < nums.length; i++) {
        nextNum = nums[i]
        if (nextNum > currNum) {
            currRes += 1
            maxRes = Math.max(maxRes, currRes)
        } else {
            currRes = 1
        }
        currNum = nextNum
    }
    return maxRes
}

// console.log(LargestContInSubs([1,3,5,4,7]))
// console.log(LargestContInSubs([2,2,2,2,2]))
// ------------------------------------------------------------------
// 7. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

function MergeTwoSortedLists(list1, list2) {
    const list3 = []
    let var1, var2
    let index1 = 0
    let index2 = 0
    while (list1.length + list2.length > 0) {
        var1 = list1[index1]
        var2 = list2[index2]
        if (var1 !== undefined && var2 !== undefined) {
            list3.push(Math.max(var1, var2))
            list3.push(Math.min(var1, var2))
        }
    } return list3
}

// console.log(MergeTwoSortedLists([1,2,4],[1,3,4]))

function merge2SLists(list1, list2) {
    let list3 = new ListNode()
    let pushed1
    let pushed2
    while (list1.val + list2.val !== 0) {
        if (list1.val === 0) {
            list3 = exhaust(list3, list2)
        } else if (list2.val === 0) {
            list3 = exhaust(list3, list1)
        } else {
            pushed1 = list1.shift()
            pushed2 = list2.shift()
            list3.push(Math.max(pushed1, pushed2))
            list3.push(Math.min(pushed1, pushed2))
        }
    } return list3
}

function exhaust(addee, adder) {
    while (adder.val !== 0) {
        addee.push(adder.shift())
    } return addee
}

function Merge2SortedLists2(list1, list2) {
    let maxNode, minNode
    let counter = 0
    let list3 = new ListNode()
    while (list1 && list2) { 
        if (list1 > list2 && list3.val === 0) {
            list3.val = list2
            list2 = list2.next
        } else {
            list3.val = list1
            list1 = list1.next
        }
    }
}

function MergeTwoSortedIm(list1, list2) {
    let curr = new ListNode()
    const dummy = curr
    while (list1&&list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        } curr = curr.next
    } 
    if (list1 === null) {
        curr.next = list2
    } 
    if (list2 === null) {
        curr.next = list1
    } 
    return dummy.next 
}
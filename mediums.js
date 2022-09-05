// 1. Container with Most Water (38 mintues, O(n^2) time)

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store

// Input: height = [1,1]
// Output: 1

//strategy: find the highest and second highest heights in the array
// but then there could be long and short ones?
// no

function Container(array) {
    let mostWater = 0
    const arrLen = array.length
    for (let i = 0; i < arrLen - 1; i++) {
        let higher = 0;
        let holder = 0;
        for (let j = i + 1; j < arrLen; j++) {
            let diff = j - i
            if (array[i] < array[j]) {
                holder = diff * (array[i])
            }
            else {
                holder = diff * (array[j])
            }
            higher = Math.max(holder, higher)
        }
        mostWater = Math.max(higher, mostWater)
    }
    return mostWater
}

function Container2(array) {
    let max_area = 0;
    let lp = 0;
    let rp = array.length - 1;

    while (lp < rp) {
        let diff = rp - lp
        if (array[lp] < array[rp]) {
            max_area = Math.max(max_area, array[lp] * diff)
            lp += 1
        }
        else {
            max_area = Math.max(max_area, array[rp] * diff)
            rp -= 1
        }
    }

    return max_area
}

// console.log(Container2([1,1]))
// console.log(Container2([1,8,6,2,5,4,8,3,7]))

// -------------------------------------------------------------------

// 2. Product of Array Except Self (Solved with hint, could do follow up qn)
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function ProductArraySelf(nums) {
    let totalmul = 1
    const answerArr = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        totalmul *= nums[i]
    }
    answerArr.fill(totalmul)
    for (let i = 0; i< nums.length; i++) {
        answerArr[i] = answerArr[i]*Math.inv(nums[i])
    }
    return answerArr
}

// console.log(ProductArraySelf([1,2,3,4]))

function ProductArraySelf2(nums) {
    const prefArr = (new Array(nums.length)).fill(1)
    const suffArr = (new Array(nums.length)).fill(1)
    const ansArr = new Array(nums.length)

    for (let i = 1; i < nums.length; i++) {
        prefArr[i] = nums[i-1]*prefArr[i-1]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        suffArr[i] = nums[i+1]*suffArr[i+1]
    }
    for (let i = 0; i < nums.length; i++) {
        ansArr[i] = prefArr[i]*suffArr[i]
    }
    return ansArr
}
 
// console.log(ProductArraySelf2([4,5,1,8,2]))

function ProductArraySelf2Space(nums) {
    const ansArr = (new Array(nums.length)).fill(1)
    let mulNum = 1

    for (let i = 1; i < nums.length; i++) {
        ansArr[i] = nums[i-1]*ansArr[i-1]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        mulNum *= nums.pop()
        ansArr[i] = ansArr[i]*mulNum
    }
    return ansArr
}

// console.log(ProductArraySelf2Space([4,5,1,8,2]))

// -------------------------------------------------------------------

// 3. Maximum Subarray (50 mins, got a good idea of how to solve)
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.



// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

function MaxSubarray(nums) {
    const leftArr = []
    const rightArr = []
    let leftp = 0
    let rightp = nums.length - 1
    let maxNeg = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            leftArr.push(nums[i])
        } else {
            leftArr.push(nums[i] + leftArr[i-1])
        } 
    } 
    let counter = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            rightArr.unshift(nums[i])
        } else {
            rightArr.unshift(nums[i] + rightArr[counter])
        } 
    } 
    while (lp < rp) {
        maxNeg = Math.Max(maxNeg, )
    }
}

// console.log(MaxSubarray([5,4,-1,7,8])) 

function MaxSubarray2(nums) {
    let maxUpTillHere 
    let maxSoFar
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            maxUpTillHere = nums[i]
            maxSoFar = nums[i]
        } else {
            maxUpTillHere = Math.max(nums[i], maxUpTillHere + nums[i])
        }
        maxSoFar = Math.max(maxSoFar, maxUpTillHere)
    }
    return maxSoFar
}

// console.log(MaxSubarray2([5,4,-1,7,8])) 
// console.log(MaxSubarray2([-2,1,-3,4,-1,2,1,-5,4])) 
// console.log(MaxSubarray2([1])) 
// console.log(MaxSubarray2([1,2]))   


// -------------------------------------------------------------------
// 4. Maximum Product Subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 
// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// function MaxProdArray(nums) {
//      let pivotIndex
//      let tracknum = 1
//      for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < 0)
//      }
// }

// function findPivot(nums) {
//     let pivotIndex = -1
//     let tracknum = 1
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < 0) {
//             pivotIndex = i
//             trankNum *= -1
//         }
//     }
// }

function BFMaxProdArray(nums) {
    let maxNum = nums[0]
    let tempNum
    for (let i = 0; i < nums.length; i++) {
        tempNum = nums[i]
        maxNum = Math.max(tempNum, maxNum)
        for (let j = i + 1; j < nums.length; j++) {
            tempNum *= nums[j]
            maxNum = Math.max(tempNum, maxNum)
        }
    } return maxNum
}

// console.log(BFMaxProdArray([2,3,-2,4]))
// console.log(BFMaxProdArray([-2,0,-1]))
// console.log(BFMaxProdArray([0,2]))

function fastMaxProdArray(nums) {
    let maxSoFar = nums[0]
    let max = 1
    let min = 1
    for (let i = 0; i < nums.length; i++) {
        let temp = max
        max = Math.max(max * nums[i], min * nums[i], nums[i])
        min = Math.min(temp * nums[i], min * nums[i], nums[i])
        maxSoFar = Math.max(maxSoFar, max)
    } return maxSoFar
}

// console.log(fastMaxProdArray([2,3,-2,4]))
// console.log(fastMaxProdArray([-2,0,-1]))
// console.log(fastMaxProdArray([0,2]))

// -------------------------------------------------------------------
// 5. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.


// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function LongestSubstrNoRepeats(s) {
    const strArr = s.split("")
    const revArr = s.split("").reverse()
    return Math.max(findMax(strArr), findMax(revArr))
}

function findMax(s) {
    let max = 0
    let size = 0
    const set = new Set()
    for (let i = 0; i < s.length; i++) {
        set.add(s[i])
        max = Math.max(set.size, max)
        if (set.size === size) { //check if there is repeats
            set.clear()
            set.add(s[i])
            size = 1
        } else {
            size += 1
        }
    } return max
}

// console.log(LongestSubstrNoRepeats("abcabcbb"))
// console.log(LongestSubstrNoRepeats("bbbbb"))
// console.log(LongestSubstrNoRepeats("pwwkew"))
// console.log(LongestSubstrNoRepeats("dvdf"))
// console.log(findMax("abcabcbb"))
// console.log(findMax("bbbbb"))
// console.log(findMax("pwwkew"))
// console.log(findMax("dvdf"))

function longestSubstring2(s) {
    let max = 0
    let size = 0
    const strArr = s.split("")
    const set = new Set()
    for (let i = 0; i < s.length; i++) {
        set.add(strArr[i])
        size = set.size
        if (set.size === size) { //check if there is repeats
            let shifted = strArr.shift()
            while (shifted !== strArr[i])  {
                shifted = strArr.shift()
                set.delete(shifted)
            } 
            set.add(strArr[i])
        } 
        // console.log(set)
        max = Math.max(max, size)
        // console.log(max, size)
    } return max
}
// console.log(longestSubstring2("abcabcbb"))
// console.log(longestSubstring2("bbbbb"))
// console.log(longestSubstring2("pwwkew"))
// console.log(longestSubstring2("dvdf"))
// console.log(longestSubstring2("asjrgapa"))

function longestSub3(s) {
    const currentChar = []
    let strArr = s.split("")
    let length = strArr.length
    let check = new Set()
    let shifted
    let whileshift
    let max = 0
    for (let i = 0; i < length; i++) {
        shifted = strArr.shift()
        check.add(shifted)
        currentChar.push(shifted)
        while (currentChar.length !== check.size) {
            whileshift = currentChar.shift()
            if (whileshift === shifted) {}
            else check.delete(whileshift)
        } 
        max = Math.max(max, currentChar.length)
    } return max
}
// can also do using the l and r pointers 
// console.log(longestSub3("abcabcbb"))
// console.log(longestSub3("bbbbb"))
// console.log(longestSub3("pwwkew"))
// console.log(longestSub3("dvdf"))
// console.log(longestSub3("asjrgapa"))

// -------------------------------------------------------------------
// 6. Unique Paths
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1
// Input: m = 3, n = 7
// Output: 28

// Example 2
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

 function uniquePaths(m, n, memo = {}) {
    const key = m + "-" + n
    if (key in memo) return memo[key]
    if (m === 0 || n === 0) return 0
    if (m === 1 || n === 1) return 1
    memo[key] = 
        uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)
    return memo[key]
 }
 
//  console.log(uniquePaths(3,7))
//  console.log(uniquePaths(3,2))

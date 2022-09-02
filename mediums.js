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

console.log(MaxSubarray([5,4,-1,7,8]))
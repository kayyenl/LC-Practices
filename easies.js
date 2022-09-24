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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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
    // the below two conditionals work because there will always be one list left with a node.
    if (list1 === null) {
        curr.next = list2
    } 
    if (list2 === null) {
        curr.next = list1
    } 
    return dummy.next
}

// console.log(MergeTwoSortedIm([1,2,4], [1,3,4])) 
// the result here will be different because we didnt pass in listnodes.

// ------------------------------------------------------------------
// 8. Find the Difference  
// (done in 20 mins with 97% speed, 95% space!!!!!!)
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.



// Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:
// Input: s = "", t = "y"
// Output: "y"

function findDifference(s, t) {
    //preprocessing 
    const map = new Map()
    let workingChar
    let getCount
    for (let i = 1; i < s.length + 1; i++) {
        workingChar = s.slice(i-1, i)
        if (map.get(workingChar) === undefined) {
            map.set(workingChar, 1)
        } else {
            getCount = map.get(workingChar)
            map.set(workingChar, getCount + 1)
        }
    } 
    for (let i = 1; i < t.length + 1; i++) {
        workingChar = t.slice(i-1, i)
        if (map.get(workingChar) === undefined) {
            return workingChar
        } else {
            getCount = map.get(workingChar)
            map.set(workingChar, getCount - 1)
            if (getCount === 0) {
                return workingChar
            }
        }
    }
}

// console.log(findDifference("hello", "olclhe"))

function findDifferenceGoodSyntax(s, t) {
    const recordS = {}
    for (const char of s) {
        recordS[char] = (recordS[char] || 0) + 1
    } 
    for (const char of t) {
        if (recordS[char]) recordS[char]--
        else if (recordS[char] === undefined || recordS[char] === 0) {
            return char
        }
    }
}

// console.log(findDifferenceGoodSyntax("hello", "olclhe"))

// ------------------------------------------------------------------
// 9. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

function plusOne(digits) {
    let digitnum
    let futureAdd = false
    for (let i = digits.length - 1; i >= 0; i--) {
        digitnum = digits[i]
        if (digitnum === 9)  {
            futureAdd = true
            digits[i] = 0
        }
        else if (digitnum !== 9) {
            futureAdd = false
            digits[i] = digitnum + 1
            return digits
        }   
    } if (futureAdd) {
        digits.unshift(1)
    } return digits
}

// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,3]))
// console.log(plusOne([9,9,9,9])) 

// ------------------------------------------------------------------
// 10. Unique Email Addressess
// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

 

// Example 1:
// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// Example 2:
// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3

function uniqueEmail(emails) {
    let plusindex, atindex, localstr, domstr, combostr
    const emailset = new Set()
    for (let i = 0; i < emails.length; i++) {
        email = emails[i]
        for (let j = 0; j < email.length; j++) {
            if (email[j] === "+" && plusindex === undefined) {
                plusindex = j
            } else if (email[j] === "@") {
                atindex = j
            }
        } 
        localstr = emails[i].slice(0, atindex)
        if (plusindex !== undefined) {
            localstr = localstr.slice(0, plusindex)
        } 
        localstr = localstr.replaceAll(".", "")
        domstr = emails[i].slice(atindex, emails[i].length)
        combostr = localstr + domstr
        emailset.add(combostr)
        // console.log(combostr, i, emailset.size)
        plusindex = undefined
    } return emailset.size
}
//should have used split to prevent traversing so many times in the replaceAll line, totally can be avoided.

// console.log(uniqueEmail(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))
// console.log(uniqueEmail(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]))
// console.log(uniqueEmail(["fg.r.u.uzj+o.pw@kziczvh.com","r.cyo.g+d.h+b.ja@tgsg.z.com","fg.r.u.uzj+o.f.d@kziczvh.com","r.cyo.g+ng.r.iq@tgsg.z.com","fg.r.u.uzj+lp.k@kziczvh.com","r.cyo.g+n.h.e+n.g@tgsg.z.com","fg.r.u.uzj+k+p.j@kziczvh.com","fg.r.u.uzj+w.y+b@kziczvh.com","r.cyo.g+x+d.c+f.t@tgsg.z.com","r.cyo.g+x+t.y.l.i@tgsg.z.com","r.cyo.g+brxxi@tgsg.z.com","r.cyo.g+z+dr.k.u@tgsg.z.com","r.cyo.g+d+l.c.n+g@tgsg.z.com","fg.r.u.uzj+vq.o@kziczvh.com","fg.r.u.uzj+uzq@kziczvh.com","fg.r.u.uzj+mvz@kziczvh.com","fg.r.u.uzj+taj@kziczvh.com","fg.r.u.uzj+fek@kziczvh.com"]))

// ------------------------------------------------------------------
// 11. Rotate String (finished in 22.5 minutes!!)
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.


// Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true

// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false

function rotateStr(s, goal) {
    if (s.length !== goal.length) return false
    let slength = s.length
    let firstchar, secondchar
    for (let i = 0; i < slength; i++) {
        if (s.slice(0) === goal.slice(0)) {
            if (s === goal) return true
        } else {
            firstchar = s[0]
            lastchar = s[slength - 1]
            s[0] = 1
        }
    } return false
}

function rotateStrArr(s, goal) {
    if (s.length !== goal.length) return false
    const sArr = s.split("")
    const goalArr = goal.split("")
    let firstChar
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[0] == goalArr[0] 
            && sArr.toString() == goalArr.toString()) {
          return true
        } else {
            firstChar = sArr[0]
            sArr.shift()
            sArr.push(firstChar)
        }
    } return false
}

// console.log(rotateStrArr("abcde", "cdeab"))
// console.log(rotateStrArr("abcde", "abced"))

// ------------------------------------------------------------------
// 12. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

function addBinary(a, b) {
    let workingnum = (parseInt(a) + parseInt(b))
    workingnum = workingnum.toPrecision(workingnum.length).split("")
    let carryover = false
    let workingchar
    for (let i = workingnum.length - 1; i >= 0; i--) {
        workingchar = parseInt(workingnum[i])
        // console.log(workingchar)
        if (carryover === true) {
            workingchar += 1
            carryover = false
        }
        if (workingchar >= 2) {
            workingchar -= 2
            carryover = true
        } 
        workingnum[i] = workingchar.toString()
    } 
    if (carryover === true) {
        workingnum.unshift("1")
    } return workingnum.join("")
}

// console.log(addBinary("11", "1"))
// console.log(addBinary("1010", "1011"))
// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))

function addBinarySimple(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let remainder = 0
    let returnstr = ""
    while (i >= 0 || j >= 0) {
        addfromA = parseInt(a[i]) || 0
        addfromB = parseInt(b[j]) || 0
        const sum = addfromA + addfromB + remainder
        const digit = sum % 2
        returnstr = digit + returnstr //this is prepended
        remainder = sum > 1 ? 1 : 0
        i--, j--
    } 
    returnstr = (remainder ? "1" : "") + returnstr
    return returnstr
}

// console.log(addBinarySimple("11", "1"))
// console.log(addBinarySimple("0", "0"))
// console.log(addBinarySimple("1010", "1011"))
// console.log(addBinarySimple("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))

// ------------------------------------------------------------------
// 13. Roman to SVGAnimatedIntegerRoman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

let hashMap = {}
hashMap["I"] = 1
hashMap["V"] = 5
hashMap["X"] = 10
hashMap["L"] = 50
hashMap["C"] = 100
hashMap["D"] = 500
hashMap["M"] = 1000

console.log(hashMap["I"])
function RomanToNum(s) {
    let returnval = 0
    let valbefore = 0
    let valnow = 0

    for (let i = 0; i < s.length; i++) {
        valnow = hashMap[s[i]]
        returnval += valnow
        if (valnow > valbefore && i !== 0) {
            returnval -= 2*(valbefore)
        }
        valbefore = valnow
    } return returnval
}

// console.log(RomanToNum("III"))
// console.log(RomanToNum("LVIII"))
// console.log(RomanToNum("MCMXCIV"))

// ------------------------------------------------------------------
// 14. Valid Parentheses (took around 30 minutes)
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

//Preprocessing
const bracketMap = new Map()
bracketMap.set("(", ")")
bracketMap.set("[", "]")
bracketMap.set("{", "}")

function ValidParentheses(s) {
    const checkingStack = []
    for (let i = 0; i < s.length; i++) {
        if (checkingStack[0] === s[i]) {
            checkingStack.shift()
        } else if (bracketMap.has(s[i])) {
            checkingStack.unshift(bracketMap.get(s[i]))
        } else return false
    } if (checkingStack.length === 0) return true
    else return false
}

// console.log(ValidParentheses("()"))
// console.log(ValidParentheses("()[]{}"))
// console.log(ValidParentheses("(]"))


// ------------------------------------------------------------------
// 15. Remove Duplicates From Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDupes(nums) {
    nums.unshift(nums[0])
    let i = nums.length - 1
    let prevnum = -1
    let counter = 0
    if (nums.length === 1) {
        nums.unshift[0]
        return 1
    }
    while (nums[i-1] <= nums[i]) {
        if (nums[i] !== prevnum) {
            prevnum = nums[i]
            nums.unshift(nums[i])
            counter += 1
        } else {
            i -= 1
        }
    } return counter
}

// console.log(removeDupes([1,1,2]))
// console.log(removeDupes([1,2,2,3,3,3,4,4]))
// console.log(removeDupes([1,2]))
// console.log(removeDupes([1]))
// console.log(removeDupes([0,0,1,1,1,2,2,3,3,4]))

function removeDupesDebugged(nums) {
    nums.unshift(nums[0])
    let i = nums.length - 1
    let prevnum = Number.MIN_SAFE_INTEGER
    let counter = 0
    if (nums.length === 1) {
        nums.unshift[0]
        return 1
    }
    while (nums[i-1] <= nums[i]) {
        if (nums[i] !== prevnum) {
            prevnum = nums[i]
            nums.unshift(nums[i])
            counter += 1
        } else i -= 1
    } return counter
}

// console.log(removeDupesDebugged([1,1,2]))
// console.log(removeDupesDebugged([1,2,2,3,3,3,4,4]))
// console.log(removeDupesDebugged([1,2]))
// console.log(removeDupesDebugged([1]))
// console.log(removeDupesDebugged([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDupesDebugged([-3,-1])) 

// ------------------------------------------------------------------
// 16. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStair(n, memo = {}) {// remember how to declare memo when not available.
    if (n in memo) return memo[n]
    if (n === 1) {
        memo[n] = 1
        return 1
    } 
    if (n === 2) {
        memo[n] = 2
        return 2
    }
    memo[n] = climbStair(n - 1, memo) + climbStair(n - 2, memo)
    return memo[n]
}   

// console.log(climbStair(5))
// console.log(climbStair(13))
// console.log(climbStair(18))
// console.log(climbStair(20))
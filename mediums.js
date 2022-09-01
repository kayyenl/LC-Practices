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
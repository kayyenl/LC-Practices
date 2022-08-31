// 1. Container with Most Water (easy)

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
                holder > higher ? higher = holder : null
            }
            else {
                holder = diff * (array[j])
                holder > higher ? higher = holder : null
            }
        }
        higher > mostWater ? mostWater = higher : null
    }
    return mostWater
}

console.log(Container([1,1]))
console.log(Container([1,8,6,2,5,4,8,3,7]))
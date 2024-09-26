/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    // O(NlogN) time due to sorting in Timsort

    // nums = nums.map(num => num ** 2);
    // nums.sort((a,b) => a-b)
    // return nums

    // two pointer approach 
    let left = 0
    let right = nums.length - 1
    let position = nums.length - 1
    let result = new Array(nums.length)

    while(left <= right) {
        let leftSquare = nums[left] ** 2
        let rightSquare = nums[right] ** 2

        if(leftSquare > rightSquare) {
            result[position] = leftSquare
            left++
        } else {
            result[position] = rightSquare
            right--
        }
        position--
    }

    return result
};
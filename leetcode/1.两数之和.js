/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idx = 0
    for (const num1 of nums) {
        let idx2 = 0
        for (const num2 of nums) {
            if (idx != idx2 && (num1 + num2) === target) {
                console.log(`nums[${idx}] + nums[${idx2}] = ${num1 + num2}`)
                return [idx, idx2]
            }
            idx2 ++
        }
        idx++
    }

    for (let i = 0 ;i < nums.length; i++) {
        
    }
};

const nums = [3,2,4]
const target = 6
const result = twoSum(nums, target)
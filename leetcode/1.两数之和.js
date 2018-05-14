// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

const assert = require('assert');

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
};

const nums = [3,2,4]
const target = 6

assert.deepEqual(twoSum(nums, target), [1, 2])
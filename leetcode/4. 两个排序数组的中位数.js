
// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

// 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 中位数是 (2 + 3)/2 = 2.5

const assert = require('assert');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1 = [], nums2 = []) {
    const array = merge(nums1, nums2)
    if (array.length % 2 == 0) {
        //偶数
        let n1 = array[array.length / 2 - 1]
        let n2 = array[array.length / 2]
        return (n1 + n2) / 2
    } else {
        //奇数
        return array[Math.floor(array.length / 2)]
    }
};

// http://bubkoo.com/2014/01/15/sort-algorithm/merge-sort/
//合并两个有序数组
function merge(nums1 = [], nums2 = []) {
    let i = 0, j = 0, k = 0
    const result = new Array(nums1.length + nums2.length)
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result[k++] = nums1[i++]
        } else {
            result[k++] = nums2[j++]
        }
    }
    while (i < nums1.length) {
        result[k++] = nums1[i++]
    }
    while (j < nums2.length) {
        result[k++] = nums2[j++]
    }
    return result
}

assert.deepEqual(merge([1, 3], [2]), [1, 2, 3])
assert.deepEqual(merge([1, 2], [3, 4]), [1, 2, 3, 4])

assert.equal(findMedianSortedArrays([1, 3], [2]), 2)
assert.equal(findMedianSortedArrays([1, 2], [3, 4]), 2.5)
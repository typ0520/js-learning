// 给定一个 32 位有符号整数，将整数中的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21

// 注意:

// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。

const assert = require('assert')

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = x / Math.abs(x)
    //-2^31 - 2^31-1 -2147483648到2147 483 647
    const result = parseInt(Math.abs(x).toString().split('').reverse().join('')) * s
    if (isNaN(result) || result > (Math.pow(2, 31) - 1) || result < -Math.pow(2, 31)) {
        return 0
    }
    return result
};
assert.equal(reverse(123), 321)
assert.equal(reverse(-123), -321)
assert.equal(reverse(120), 21)
assert.equal(reverse(1147483647), 0)
assert.equal(reverse(-1147483648), 0)
assert.equal(reverse(1), 1)
assert.equal(reverse(-1), -1)
assert.equal(reverse(0), 0)
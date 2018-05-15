// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba"也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

const assert = require('assert')

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s = '') {
    if (s.length <= 1) {
        return s
    }
    let maxLongestPalindrome = ''
    for (let i = 1, length = s.length; i < length; i++) {
        //babad => aba
        //csknksog => sknks
        let j = i - 1
        let k = i + 1
        while (j >= 0 && k < length && s[j] === s[k]) {
            let len = k - j + 1
            if (len > maxLongestPalindrome.length) {
                maxLongestPalindrome = s.substring(j, k + 1)
            }
            j--
            k++
        }
        //cbbbbbbd => bbbbbb
        j = i - 1, k = i
        while (j >= 0 && k < length && s[j] === s[k]) {
            let len = k - j + 1
            if (len > maxLongestPalindrome.length) {
                maxLongestPalindrome = s.substring(j, k + 1)
            }
            j--
            k++
        }
    }
    if (maxLongestPalindrome === '') {
        maxLongestPalindrome = s[0]
    }
    return maxLongestPalindrome
};

assert.equal(longestPalindrome('babad'), 'bab')
assert.equal(longestPalindrome('cbbbbbbd'), 'bbbbbb')
assert.equal(longestPalindrome('cbbd'), 'bb')
assert.equal(longestPalindrome('ccc'), 'ccc')
assert.equal(longestPalindrome('abcda'), 'a')
assert.equal(longestPalindrome('aaaabaaa'), 'aaabaaa')
const str = 'jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel'
assert.equal(longestPalindrome(str), 'sknks')
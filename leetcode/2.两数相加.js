// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4 -> 3)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// 342 + 3465 = 3807

// [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
// [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]

// [5]
// [5]
// [0, 1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1)
    console.log(l2)
    //把l1 l2还原成number
    let node1 = l1, node2 = l2, resultNode, curNode
    while (node1 || node2) {
        const val1 = node1 ? node1.val : 0
        const val2 = node2 ? node2.val : 0
        let valSum = val1 + val2
        if (curNode && curNode.carry) {
            valSum += 1
        }
        let carry = valSum >= 10
        if (carry) {
            valSum -= 10
        }
        if (!resultNode) {
            resultNode = new ListNode(valSum)
            curNode = resultNode
        } else {
            curNode.next = new ListNode(valSum)
            curNode = curNode.next
        }
        curNode.carry = carry
        node1 = node1 != null ? node1.next : null
        node2 = node2 != null ? node2.next : null

        //如果有进位但是处于末尾
        if (carry && !node1 && !node2) {
            curNode.next = new ListNode(1)
        }
    }
    return resultNode
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const listNode = new ListNode(2)
listNode.next = new ListNode(4)
listNode.next.next = new ListNode(3)

const listNode2 = new ListNode(5)
listNode2.next = new ListNode(6)
listNode2.next.next = new ListNode(4)
listNode2.next.next.next = new ListNode(3)

//listNode2.next.next.next = new ListNode(4)

addTwoNumbers(listNode, listNode2)
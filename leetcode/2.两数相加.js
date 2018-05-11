// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

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
    const nodeNumber1 = listNodeToNumber(l1)
    const nodeNumber2 = listNodeToNumber(l2)

    console.log(nodeNumber1)
    console.log(nodeNumber2)
    const resultNumberArray = (nodeNumber1 + nodeNumber2).toString().split('').reverse()
    let resultListNode;
    let curListNode;
    for (const valueString of resultNumberArray) {
        if (!resultListNode) {
            resultListNode = new ListNode(parseInt(valueString))
            curListNode = resultListNode
        } else {
            curListNode.next = new ListNode(parseInt(valueString))
            curListNode = curListNode.next
        }
    }
    console.log(resultListNode)
    return resultListNode
};

function listNodeToNumber(listNode) {
    let curNode = listNode
    const array = []
    while (curNode) {
        array.unshift(curNode.val)
        curNode = curNode.next
    }
    return parseInt(array.join(''))
}

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

addTwoNumbers(listNode, listNode2)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null) return null
    if (head && head.next === null) return head
    let newHead = head.next
    head.next = swapPairs(head.next.next)
    newHead.next = head
    return newHead
}

/* 
    2021/9/17
    解法一：递归
    80 47

    解法二：迭代
    80 21
    let dummy = new ListNode(0, head)
    let node = dummy
    while (node.next && node.next.next) {
        let tmp1 = node.next
        let tmp2 = node.next.next
        let tmp3 = node.next.next.next
        tmp1.next = tmp3
        tmp2.next = tmp1
        node.next = tmp2
        node = tmp1
    }
    return dummy.next

    重点是处理好剩余节点数不足两个的情况
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
    let head = tail = new ListNode((l1.val + l2.val) % 10)
    let add = 0
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        const sum = n1 + n2 + add

        tail.next = new ListNode(sum % 10)
        tail = tail.next
        add = Math.floor(sum / 10)
        l1 = l1?.next
        l2 = l2?.next
    }
    if (add) {
        tail.next = new ListNode(add)
    }
    return head.next
};

/* 
    2021/9/16
    86 84
    模拟 O(N)
*/
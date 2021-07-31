/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let reverseBetween = function(head, left, right) {
    if (left === 1) {
        return reverseHead(head, right)
    }
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head
};

let nextNode = null

let reverseHead = function(head, n) {
    
    if (n === 1) {
        nextNode = head.next
        return head
    }
    let newHead = reverseHead(head.next, n - 1)
    head.next.next = head
    head.next = nextNode
    return newHead
}

/* 
    2021/7/31
    反转链表加强版
    先将反转整个链表优化为反转整个链表的前N项
    通过迭代链表并递减N，在basecase处记录反转前最后一个节点(新头节点)的下一个节点，再对前N项执行反转整个链表，将原头节点的next节点设置为之前记录的节点(而不是null)
    再通过迭代递减left直至left为1，将反转left和right之间的节点转换为反转前N个节点(因为此时left为1)
*/
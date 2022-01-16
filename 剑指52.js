/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!(headA && headB)) return null
    let node1 = headA
    let node2 = headB
    while (node1 !== node2) {
        node1 = !(node1) ? headB : node1.next
        node2 = !(node2) ? headA : node2.next
    }
    return node1
}

/* 
    2022/01/16
    31 77
    链表
*/
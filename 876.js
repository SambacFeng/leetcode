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
var middleNode = function(head) {
    let fast = slow = ListNode(0)
    fast = slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};

/* 
    2021/8/13
    快慢指针，快指针到达末尾时慢指针到达中点
*/
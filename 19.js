/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    while (head) {
        let fast = slow = new ListNode(0)
        fast = slow = head
        while (n) {
            n--
            fast = fast.next
        }
        if (fast) {
            while (fast && fast.next) {
                fast = fast.next
                slow = slow.next
            }
            slow.next = slow.next.next
            return head
        }
        return head.next
    }
    return null
};

/* 
    2021/8/13
    利用虚拟头节点可以减小消耗同时精简代码
*/
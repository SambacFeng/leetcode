/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let fast = slow = ListNode(0)
    fast = slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }
    if (!(fast && fast.next)) {
        return null
    }
    fast = head
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};

/* 
    2021/8/13
    97% 34%
    利用快慢指针，相遇时慢指针走了k步，快指针走了2k步，多走的k步肯定是在环里绕圈，所以k是环长度的整数倍，此时让快指针返回头部，设相遇点与环起点的距离为m，两指针以同样的速度前进k-m距离后在环起点相遇

    JS特性解法，94% 75%
    while (head) {
        if (head.flag) {
            return head
        }
        head.flag = true
        head = head.next
    }
    return null
 */
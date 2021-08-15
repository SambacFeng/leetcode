/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let fast = slow = new ListNode(0)
    fast = slow = head
    while (k--) {
        fast = fast.next
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};

/* 
    2021/8/15
    87% 5%
    快慢指针，快指针先向前进k步后两指针一起前进，快指针到达末尾后慢指针指向倒数第k个元素
    空间复杂度O1的写法为什么会5%...我不明白
*/
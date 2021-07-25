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
let reverseList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}

/* 
    2021/7/25
    递归解法，出口是遍历到链表末尾，返回作为头
    对第n项将第n+1项的下一项指向第n项

    遍历解法，空间为1(递归是N)
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
*/
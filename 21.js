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
let mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    }
    let newHead = new ListNode()
    let prev = newHead
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2;
            l2 = l2.next
        }
        prev = prev.next
    }
    prev.next = l1 == null ? l2 : l1

    return newHead.next
}

/* 
    2021/7/26
    先判断为空的边界情况，再使用新链表保存结果
    有直接修改原链表的解法，更省空间
*/
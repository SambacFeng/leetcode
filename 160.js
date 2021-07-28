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
let getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null
    }
    while (headA !== null) {
        headA.flag = true
        headA = headA.next
    }
    while (headB !== null) {
        if (headB.flag) {
            return headB
        }
        headB = headB.next
    }
    return null
}

/* 
    2021/7/28
    遍历链表A，标记遍历过的，再遍历链表B，若有标记则相交
    时间m+n，空间m
    空间只有6.08%

    省空间的双指针做法
        if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;

    A遍历到末尾后指针指向headB，B遍历到末尾后指针指向A，当pA和pB同时经过A、B独有部分和公共部分后相遇，返回
*/
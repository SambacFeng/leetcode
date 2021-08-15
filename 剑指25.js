/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) {
        return l1 ? l1 : l2
    }
    let newHead = new ListNode()
    let prev = newHead
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    prev.next = l1 ? l1 : l2
    return newHead.next


};
/* 
    2021/8/15
    94 75
    双指针，使用新的链表合并两个链表

    递归写法
        if (!l1 || !l2) return l1 || l2
    // 进行大小对比
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
    递归真是优雅啊
*/

/*     let ln1 = ln2 = new ListNode(0)
    ln1 = l1
    ln2 = l2
    while (ln1 && ln2) {
        let tmp = new ListNode()
        if (ln1.val <= ln2.val) {
            tmp = ln2.next
            ln2.next = ln1.next
            ln1.next = ln2
            ln2 = tmp
            ln1 = ln1.next
        }
        ln1 = ln1.next
    }
    return l1 */
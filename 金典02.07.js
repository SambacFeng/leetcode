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
    let lenA = 0, lenB = 0
    let nodeA = headA
    let nodeB = headB
    while (headA) {
        lenA++
        headA = headA.next
    }
    while (headB) {
        lenB++
        headB = headB.next
    }
    if (lenA < lenB) {
        [lenA, lenB] = [lenB, lenA]
        // 这里不加分号会导致解析错误
        ;[nodeA, nodeB] = [nodeB, nodeA]
    }
    while (lenA && lenA !== lenB) {
        nodeA = nodeA.next
        lenA--
    }
    while (nodeA && nodeA !== nodeB) {
        nodeA = nodeA.next
        nodeB = nodeB.next
    }
    return nodeA
}

/* 
    2021/9/17
    解法一：js特性
    46 5
    属于是慢到没边了。。
    给A每个节点加一个flag，如果遍历B的过程中遇到了flag则证明有交点
    while (headA) {
        headA.flag = true
        headA = headA.next
    }
    while (headB) {
        if (headB.flag) return headB
        headB = headB.next
    }
    return null

    解法二：遍历
    73 28
    分别遍历两个链表获取链表的长度，将两个链表对齐后一起向后遍历直到相同或到末尾
*/
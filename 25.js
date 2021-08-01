/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = function(head, k) {
    if (head === null) {
        return null
    }
    let tail1 = tail2 = head
    for (let i = 0; i < k; i++) {
        if (tail2 === null) return head
        tail2 = tail2.next
    }

    let prev, cur = tail1
    while (cur !== tail2) {
        const nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }
    let newHead = prev

    tail1.next = reverseKGroup(tail2, k)
    return newHead
}

/* 
    2021/8/1
    tail1保存第一个k区间反转后的尾部，tail2保存下一个k区间的尾部，用于确定要反转的区间
    向后移动tail2直至tail2 === k + 1， 即要反转的区间为[tail1, tail2)
    判断tail2 === null时退出也保证了在剩余节点小于k时的顺序
    
    通过迭代的方式对第一个k区间进行反转并获取新头节点
    
    将反转后的尾节点的next指向子问题的头节点，子问题即[tail2, null)区间内的问题
    返回新的头节点，对于最外层即新头节点，对于子问题可将新头节点连接到父问题尾节点之后
*/
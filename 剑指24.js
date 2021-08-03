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
 var reverseList = function(head) {
    if (head && head.next) {
        let newHead = new ListNode(0)
        newHead = reverseList(head.next)
        head.next.next = head
        head.next = null
        return newHead
    }
    return head
}

/* 
    2021/8/3
    借鉴了剑指18优化内存的方法，新建节点而不是直接复制链表，省一些空间(8%->26%)
    当然最省内存的还是迭代。。
*/
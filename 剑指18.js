/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head && head.next) {
        if (head.val === val) {
            return head.next
        }
        let node = head
        /*  
            let node = new ListNode(0)
            node.next = head 
        */
        while (node.next) {
            if (node.next.val === val) {
                node.next = node.next.next
                return head
            }
            node = node.next
        }
    }
    return null
}

/* 
    2021/8/2
    这题lc上和书上不一样导致没有O1解？(书上是给一个节点，lc给节点值，导致必须要先通过值找到节点才能删除，至少ON)，这个ON解法94% 36%，不知道为什么这么耗内存。。我明明只定义了一个node。。

    破案了。。node = head导致我直接复制了一份整个链表。。js对象机制的问题，改为注释中的方式后99% 98%，好耶

    思路是先找到要删除的节点，用后一个节点覆盖这个节点以达到删除该节点的目的，注意数组为空，删除头节点和删除尾节点的边界情况
*/
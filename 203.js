/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dummy = new ListNode(0, head)
    let node = dummy
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next
            continue
        }
        node = node.next
    }
    return dummy.next
}

/* 
    2021/9/17
    84 82
    创建哑节点以方便对头节点进行操作
*/
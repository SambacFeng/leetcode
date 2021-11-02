/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
}

/* 
    2021/11/2
    76 97
    卡了半天，想了各种方法获取被删除节点，最后发现这题没说不能改值，直接把下一个节点的值赋给要删除的节点，再把下一个节点删除即可
*/
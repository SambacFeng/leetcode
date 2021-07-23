/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
let reversePrint = function(head) {
    const getVal = (ListNode) => {
        if (ListNode == null) {
            return
        } else {
            getVal(ListNode.next)
            ans.push(ListNode.val)
        }
    }
    let ans = []
    getVal(head)
    return ans
}

/* 
    2021/7/23
    按题意应该是递归或利用栈(哪来的栈(哪来的链表))
    直接用数组的unshift方法，比递归还快些
*/

/* let ans = []
let node = head
while (node.next !== null) {
    ans.unshift(node.val)
    node = node.next
}
return ans */
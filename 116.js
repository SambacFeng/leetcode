/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if (root) {
        let leftmost = root
        while (leftmost.left) {
            let head = leftmost
            while (head) {
                head.left.next = head.right
                if (head.next) {
                    head.right.next = head.next.left
                }
                head = head.next
            }
            leftmost = leftmost.left
        }
        return root
    }
    return null
};

/* 
    2021/8/5
    问题分两部分，一是连接某个节点的左右孩子，直接调用即可，但再出现跨父节点的连接时无法完成
    因而定义第二个函数，通过直接传入两个节点来将它们连接的方式实现，其中第28行可以比较好的完成跨父节点的连接
    var connect = function(root) {
    if (root) {
        connectTwoNodes(root.left, root.right)
        return root
    }
    return null
    };

    let connectTwoNodes = (node1, node2) => {
        if (node1 && node2) {
            node1.next = node2
            connectTwoNodes(node1.left, node1.right)
            connectTwoNodes(node2.left, node2.right)
            connectTwoNodes(node1.right, node2.left)
        }
        return
    }
    36% 44%，好像不是很优秀
    因为反复调用自定义的函数导致压栈太多
    官方题解思路为一层一层进行，避免出现额外的大量递归，从每层最左侧的子节点开始向右进行，连接跨父节点的子节点时通过父节点的next指针进行
    96% 82%，较为合理，空间由ON进步为O1
*/
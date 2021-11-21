/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    let res = 0
    root.children.forEach(e => {
        res = Math.max(res, maxDepth(e))
    })
    return res + 1
}

/* 
    2021/11/21
    12 5
    dfs 树
    递归求值
*/
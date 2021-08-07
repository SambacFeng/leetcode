/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let preorderTraversal = function(root) {
    let ans = []
    preOrder(root, ans)
    return ans
};

let preOrder = (root, ans) => {
    if (root) {
        ans.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
    return
}

/* 
    2021/8/7
    递归写法，98% 87%
    const res =[]
    const stack = []
    while (root || stack.length){
        while(root){
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return res
    迭代，利用栈进行操作，按前序迭代并压栈，入栈顺序即为前序遍历，同时弹栈顺序为中序遍历
    95% 40%
    怎么比递归还费空间。。
*/
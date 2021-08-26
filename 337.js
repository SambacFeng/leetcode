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
 * @return {number}
 */
var memo = new Map()
var rob = function(root) {
    if (root === null) return 0
    if (memo.get(root)) return memo.get(root)
    let robRoot = root.val 
        + (root.left ? (rob(root.left.left) + rob(root.left.right)) : 0) 
        + (root.right ? (rob(root.right.left) + rob(root.right.right)) : 0)
    let notRob = rob(root.left) + rob(root.right)

    res = Math.max(robRoot, notRob)
    memo.set(root, res)
    return res
};

/* 
    2021/8/27
    67 58
    对于dp到的每个根节点，有两种选择
    1. 不抢，抢它的左右孩子
    2. 抢，不抢他的左右孩子，抢它孩子的孩子(如果孩子存在)
    dp = max {
        root.val + dp(root.l.l) + dp(root.l.r) + dp(root.r.l) + dp(root.r.r) // 抢
        dp(root.l) + dp(root.r)
    }

    可以选择不使用map而在返回时返回一个数组，数组中使用两个元素分别代表抢与不抢的值，可以进一步的减小子问题规模，在时间和空间上的表现都更好
    对于返回数组的helper函数，在使用数组值前先进行计算并保存结果可以省时，避免每次使用数组值时重新计算
    94 91
    const rob = (root) => {
        const helper = (root) => {
            if (root == null) return [0, 0];
            // 这里先计算left和right的值，在下方用到的时候可以省时2/3
            const left = helper(root.left);
            const right = helper(root.right);

            robExcludeRoot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
            robIncludeRoot = root.val + left[0] + right[0];

            return [robExcludeRoot, robIncludeRoot];
        };
        // 这里也可以省时1/2
        const res = helper(root);
        return Math.max(res[0], res[1]);
    };
    其中return[0]为不抢，[1]为抢
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return buildTree(nums, 0, nums.length - 1)
};

let buildTree = (nums, left, right) => {
    if (left <= right) {
        let maxVal = -1, maxIndex = -1
        for (let i = left; i <= right; i++) {
            if (nums[i] > maxVal) {
                maxVal = nums[i]
                maxIndex = i
            }
        }
        let root = new TreeNode(maxVal)
        root.left = buildTree(nums, left, maxIndex - 1)
        root.right = buildTree(nums, maxIndex + 1, right)
        return root
    }
    return null
}

/* 
    2021/8/9
    76% 76%
    自定义build函数传入更多参数辅助构建新树
    通过前序遍历的方式进行构建
    每次构建树扫描构建范围内的数组并取出最大值作为根节点进行构建，再对左右侧数组分别进行构建，作为左右子树连接到根节点上
*/
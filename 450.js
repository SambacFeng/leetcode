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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    const deleteOneNode = target => {
        if (!target) return target
        if (!target.right) return target.left
        let cur = target.right
        while (cur.left) {
            cur = cur.left
        }
        cur.left = target.left
        return target.right
    }

    if (!root) return root
    let cur = root
    let pre = null
    while (cur) {
        if (cur.val === key) break
        pre = cur
        cur.val > key ? cur = cur.left : cur = cur.right
    }
    if (!pre) {
        return deleteOneNode(cur)
    }
    if (pre.left && pre.left.val === key) {
        pre.left = deleteOneNode(cur)
    }
    if (pre.right && pre.right.val === key) {
        pre.right = deleteOneNode(cur)
    }
    return root
    /*     if (!root) return null
        let last = node = dummy = new TreeNode(10000000, root, null)
        let isLeft = false
        while (node.val !== key) {
            last = node
            if (node.val > key) {
                node = node.left
                isLeft = true
            } else {
                node = node.right
                isLeft = false
            }
            if (!node) return root
        }
        if (!node) {
            ;
        } else if (!(node.left || node.right)) {
            isLeft ? last.left = null : last.right = null
        } else if (!node.left) {
            isLeft ? last.left = node.right : last.right = node.right
        } else if (!node.right) {
            isLeft ? last.left = node.left : last.right = node.left
        } else {
            let left = node.left
            let right = node.right
            node = left
            while (node.right) {
                node = node.right
            }
            node.right = right
            isLeft ? last.left = left : last.right = left
        }
        return dummy.left */
}

/* 
    2021/10/22
    42 28
    ????????????????????????????????????????????????
    ??????????????????????????????????????????????????????????????????????????????
    2021/10/23
    78 45
    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????dummy???????????????????????????
*/

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

let tr13 = new TreeNode(13, null, null)
let tr18 = new TreeNode(18, null, null)
let tr15 = new TreeNode(15, tr13, tr18)
let tr5 = new TreeNode(5, null, null)
let tr10 = new TreeNode(10, tr5, tr15)

deleteNode(tr10, 15)
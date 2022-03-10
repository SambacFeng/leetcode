/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    const dfs = (root: Node | null): null => {
        if (!root) return
        res.push(root.val)
        for (const ch of root.children) {
            dfs(ch)
        }
    }

    const res: number[] = []
    dfs(root)
    return res
}

/* 
    2022/03/10
    86 24
    二叉树
    把遍历二叉树的左右子节点改为for..of遍历所有children
*/
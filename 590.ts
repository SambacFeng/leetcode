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

function postorder(root: Node | null): number[] {
    const dfs = (root: Node | null) => {
        if (root == null) {
            return
        }
        for (const child of root.children) {
            dfs(child)
        }
        res.push(root.val)
    }
    const res = []
    dfs(root)
    return res
}

/* 
    2022/03/12
    87 39
    二叉树
*/
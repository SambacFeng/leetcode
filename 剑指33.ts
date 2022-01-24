function verifyPostorder(postorder: number[]): boolean {
    if (postorder.length === 0 || postorder.length === 1) return true
    const rootVal: number = postorder.pop()
    let left: number[] = [], right: number[] = []
    while (postorder.length) {
        const val: number = postorder.shift()
        if (val < rootVal) {
            left.push(val)
        } else {
            right = [val, ...postorder]
            for (let i: number = 0; i < right.length; i++) {
                if (right[i] < rootVal) return false
            }
            break
        }
    }
    return verifyPostorder(left) && verifyPostorder(right)
}

/* 
    2022/01/24
    94 6
    二叉树 递归
    把树分为根，左子树，右子树三个部分，判断右子树的合理性，并递归判断左右子树是否是postBST
*/
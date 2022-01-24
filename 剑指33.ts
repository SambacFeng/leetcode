function verifyPostorder(postorder: number[]): boolean {
    const judge = (left: number, right: number): boolean => {
        if (left >= right) return true
        const rootVal: number = postorder[right]
        let idx: number = left
        while (postorder[idx] < rootVal) idx++
        for (let i: number = idx; i < right; i++) {
            if (postorder[i] < rootVal) return false
        }
        return judge(left, idx - 1) && judge(idx, right - 1)
    }
    return judge(0, postorder.length - 1)
/*     if (postorder.length === 0 || postorder.length === 1) return true
    
    let left: number[] = [], right: number[] = []
    let idx: number = 0
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
    return verifyPostorder(left) && verifyPostorder(right) */
}

/* 
    2022/01/24
    94 6
    二叉树 递归
    把树分为根，左子树，右子树三个部分，判断右子树的合理性，并递归判断左右子树是否是postBST
    优化了下，改用索引，写的优雅些，99 6
    和我的计划有些出入...不再另开左右数组直接原地递归不应该省空间吗...怎么一点没变
*/
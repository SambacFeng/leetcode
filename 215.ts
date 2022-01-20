function findKthLargest(nums: number[], k: number): number {
    const maxHeapify = (nums: number[], i: number, heapSize: number): void => {
        let lChildIdx: number = i * 2 + 1
        let rChildIdx: number = i * 2 + 2
        let largest: number = i 
        if (lChildIdx < heapSize && nums[lChildIdx] > nums[largest]) {
            largest = lChildIdx
        }
        if (rChildIdx < heapSize && nums[rChildIdx] > nums[largest]) {
            largest = rChildIdx
        }
        if (largest !== i) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]]
            maxHeapify(nums, largest, heapSize)
        }
    }

    const build = (nums: number[], heapSize: number): void => {
        for (let i: number = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            maxHeapify(nums, i, heapSize)
        }
    }

    let heapSize: number = nums.length
    build(nums, heapSize)
    for (let i: number = nums.length - 1; i >= nums.length - k + 1; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]]
        heapSize--
        maxHeapify(nums, 0, heapSize)
    }

    return nums[0]
}

/* 
    2022/01/20
    62 35
    堆排序
    使用堆排序来解决这个问题——建立一个大顶堆，做 k − 1 次删除操作后，堆顶元素就是结果
    大顶堆：每个节点的值都 大于或等于 其左右孩子节点的值
    使用数组存储完全二叉树：
    第 n 个元素的 左子节点 为 2 * n + 1
    第 n 个元素的 右子节点 为 2 * n + 2
    第 n 个元素的 父节点 为 (n - 1) / 2
    最后一个非叶子节点为 Math.floor(arr.length / 2) - 1
    build函数构造一个大顶堆，maxHeapify函数用于构建大顶堆过程中调整数值的位置
*/
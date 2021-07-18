let findDup = (nums) => {
    let length = nums.length
    let lowIndex = 1
    let highIndex = nums.length - 1
    while (lowIndex <= highIndex) {
        // 分两部分，一部分low-mid，一部分mid+1-high
        let midIndex = Math.floor((lowIndex + highIndex) / 2)
        // 如果这部分里数字个数超过范围，证明这部分里有重复数字
        let count = countNum(nums, lowIndex, midIndex, length)
        // 找到重复数字，返回
        if ((lowIndex === highIndex) && (count > 1)) {
            return lowIndex
        }
        // 缩小范围到有重复数字的部分
        if (count > midIndex - lowIndex + 1) {
            highIndex = midIndex
        } else {
            lowIndex = midIndex + 1
        }
    }
    // 未找到，返回-1
    return -1
}

let countNum = (nums, lowIndex, highIndex, length) => {
    let count = 0
    for (let i = 0; i < length; i++) {
        // 统计位于low和high之间的数的个数
        if (nums[i] >= lowIndex && nums[i] <= highIndex) {
            count++
        }
    }

    return count
}

test = [2, 3, 5, 4, 3, 2, 6, 7]
console.log(findDup(test))

/*
    2021/7/19
    二分查找+个数统计
    时间NlogN，无额外空间开销
    有缺陷，不一定能找出所有重复数字，如例子中2就不能被找出
 */
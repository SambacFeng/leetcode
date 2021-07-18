/**
 * 二分查找
 *
 * @param {*[]} sortedArray
 * @param {*} target
 * 
 * @return {number}
 */

let binarySearch = (sortedArray, target) => {
    // 搜索边界
    let lowIndex = 0
    let highIndex = sortedArray.length - 1

    // lowIndex > highIndex 时，搜索完成
    while (lowIndex <= highIndex) {
        // 二分位置
        let midIndex = Math.floor((lowIndex + highIndex) / 2)

        // 二分位索引处的值等于目标时搜索成功，返回索引
        if (sortedArray[midIndex] === target) {
            return midIndex
        }

        // 未找到时，根据比较结果选择搜索哪个半边
        if (sortedArray[midIndex] < target) {
            lowIndex = midIndex + 1
        } else {
            highIndex = midIndex - 1
        }
    }

    // 搜索完成时仍未找到，返回-1
    return -1
}
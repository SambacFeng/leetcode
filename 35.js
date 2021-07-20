let binarySearch = (sortedArray, target) => {
    let lowIndex = 0, highIndex = sortedArray.length - 1
    if (target > sortedArray[highIndex]) {
        return highIndex + 1
    } else if (target < sortedArray[0]) {
        return 0
    }
    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2)
        if (sortedArray[midIndex] === target) {
            return midIndex
        } else if (sortedArray[midIndex] < target && sortedArray[midIndex + 1] > target) {
            return midIndex + 1
        }
        if (sortedArray[midIndex] > target) {
            highIndex = midIndex
        } else {
            lowIndex = midIndex + 1
        }
    }
    return -1
}

let testArr = [1]
console.log(binarySearch(testArr, 1))

/* 
    2021/7/21
    二分查找板子，注意target在数组范围外的边界条件
 */
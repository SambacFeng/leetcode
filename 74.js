/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let i = 0, j = matrix[0].length - 1
    while (i < matrix.length && j >= 0) {
        if (matrix[i][j] === target) {
            return true
        } else if (matrix[i][j] < target) {
            i++
        } else {
            j--
        }
    }
    return false
}



testArr = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
console.log(searchMatrix(testArr, -1))

/* 
    2021/7/20
    先列后行，使用二分查找可加快速度
    var searchMatrix = function (matrix, target) {
        let row = binarySearchColumn(matrix, target)
        if (row < 0) {
            return false;
        }
        return binarySearchRow(matrix[row], target)
    }

    let binarySearchColumn = (sortedArray, target) => {
        let lowIndex = -1
        let highIndex = sortedArray.length - 1
        while (lowIndex < highIndex) {
            let midIndex = Math.floor((lowIndex + highIndex) / 2)
            if (sortedArray[midIndex][0] === target) {
                return midIndex
            }
            if (sortedArray[midIndex][0] < target) {
                lowIndex = midIndex
            } else {
                highIndex = midIndex - 1
            }
        }
        return lowIndex
    }

    let binarySearchRow = (row, target) => {
        let lowIndex = -1
        let highIndex = row.length - 1
        while (lowIndex <= highIndex) {
            let midIndex = Math.floor((lowIndex + highIndex) / 2)
            if (row[midIndex] === target) {
                return true
            }
            if (row[midIndex] < target) {
                lowIndex = midIndex + 1
            } else {
                highIndex = midIndex - 1
            }
        }
        return false
    }
*/
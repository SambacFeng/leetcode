/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const quickSort = (arr, left, right) => {
        if (left < right) {
            let pivot = partition(arr, left, right)
            quickSort(arr, left, pivot - 1)
            quickSort(arr, pivot + 1, right)
        }
        return arr
    }

    const partition = (arr, left, right) => {
        let pivot = arr[left]
        let l = left + 1, r = right
        while (l <= r) {
            while (l <= r && arr[l] < pivot) l++
            while (l <= r && arr[r] > pivot) r--
            if (l <= r) {
                [arr[l], arr[r]] = [arr[r], arr[l]]
                l++
                r--
            }
        }
        [arr[left], arr[r]] = [arr[r], arr[left]]
        return r
    }
    quickSort(nums, 0, nums.length - 1)
    return nums
}

/* 
    2022/01/04
    44 40
    手写快排
*/
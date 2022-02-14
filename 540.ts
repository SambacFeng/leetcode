function singleNonDuplicate(nums: number[]): number {
    let left: number = 0, right: number = nums.length - 1
    while (left < right) {
        let mid = Math.floor(((right + left) / 2))
        nums[mid] === nums[mid ^ 1] ? left = mid + 1 : right = mid
    }
    return nums[left]
}

/* 
    2021/2/14
    100 16
    二分 位运算
    现场学习异或用法
    假设求9 ^ 5
    9       === 1001
    5       === 0101
    9 ^ 5   === 1100 === 12
    nums[mid] 和 nums[mid ^ 1]比较本质上就是根据mid的奇偶比较mid和mid+-1
    因为偶数 ^ 1 === 这个数 + 1，如8 ^ 1 === 1000 ^ 0001 === 1001 === 9
    奇数 ^ 1 === 这个数 - 1，如9 ^ 1 === 1001 ^ 0001 === 1000 === 8
    通过这种方式，可以一对一对的比较数组中的元素，以求出独特的那个数字
    注意：和普通的二分查找不同的是，这种方法的循环条件是left < right 而不是 <=，不然会出现一个数反复自加自减无限循环的情况
*/
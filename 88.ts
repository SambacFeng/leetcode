/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1: number = m - 1, p2: number = n - 1, p: number = m + n - 1
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            nums1[p--] = nums2[p2--]
        } else if (p2 === -1) {
            nums1[p--] = nums1[p1--]
        } else if (nums1[p1] >= nums2[p2]) {
            nums1[p--] = nums1[p1--]
        } else {
            nums1[p--] = nums2[p2--]
        }
    }
}

/* 
    2022/03/09
    58 37
    数组
*/
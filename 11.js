/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
    let left = 0, right = height.length - 1, res = 0
    while (left < right) {
        res = Math.max(res, (right - left) * Math.min(height[left], height[right]))
        height[left] >= height[right] ? right-- : left++
    }
    return res
    /*     
        let res = 0, n = height.length
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                res = Math.max(res, (j - i) * Math.min(height[i], height[j]))
            }
        }
        return res 
        */
};

/* 
    2021/9/14
    54 39
    双指针，分别从两侧向中间逼近，每次移动高度较低的那个指针，复杂度N
    两个for循环，复杂度N^2
*/
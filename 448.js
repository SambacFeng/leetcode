var findDisappearedNumbers = function (nums) {
    let ans = [];
    for (let num of nums) {
        pos = Math.abs(num) - 1
        if (nums[pos] > 0) {
            nums[pos] = -nums[pos]
        }
    }
    for (let i in nums) {
        if (nums[i] > 0) {
            ans.push(i * 1.0 + 1)
        }
    }
    return ans
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

/* 
2021/7/17
对于每个出现的数字num，将第num-1个值设为负值以标记出现过该值，遍历整个数组，为正的即是没有出现过的值
由于数组元素会出现负值，故需要用abs(num) 
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let ans = [];
    for (const num of nums) {
        const absNum = Math.abs(num);
        if (nums[absNum - 1] < 0) {
            ans.push(absNum);
        } else {
            nums[absNum - 1] = -1 * nums[absNum - 1];
        }
    }

    return ans;
};

test = [0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(findDuplicates(test))

/* 
2021/7/18
本题相比剑指03，因为每个数字只出现一次或两次，故用负数表示已有等于该索引的值更加简单易懂
且用for..of可以避免数组下标与值相差1从而频繁出现-1的情况(本题值的范围为[1..n])
 */
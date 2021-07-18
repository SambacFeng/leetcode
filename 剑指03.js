/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findRepeatNumber = function(nums) {
    // 依次扫描每个值
    for (let index = 0; index < nums.length; index++) {
        let value = nums[index]
        // 值与索引相同，跳过
        while (value !== index) {
            // 值为索引的位置，值等于该索引，找到
            if (nums[index] === nums[value]) {
                return value
            }
            // 未找到的话交换两数
            [nums[index], nums[nums[index]]] = [nums[nums[index]], nums[index]]
        }
    }

    return null
}

/* 
2021/7/18
原地哈希，也可使用负值(使用时取绝对值)或加索引值(使用时%长度)
也可使用Map哈希表实现(消耗额外N空间)
*/
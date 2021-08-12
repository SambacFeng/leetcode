/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    if (numbers) {
        let left = mid = 0
        let right = numbers.length - 1
        while (numbers[left] >= numbers[right]) {
            if (left + 1 === right) {
                return numbers[right]
            }
            mid = Math.floor((left + right) / 2)
            if (numbers[left] === numbers[right] && numbers[left] === numbers[mid]) {
                minVal = 99999999
                for (let i = left; i <= right; i++) {
                    if (numbers[i] < minVal) {
                        minVal = numbers[i]
                    }
                }
                return minVal
            }
            if (numbers[mid] >= numbers[left]) {
                left = mid
            } else if (numbers[mid] <= numbers[right]) {
                right = mid
            }
        }
        return numbers[left]
    }
    return null
};

let arr = [-1,-1,-1,-1]
console.log(minArray(arr));

/* 
    2021/8/12
    84% 39%

    官方解法：
    在出现所有值均相等的情况时只减少一次high，从而避免了专门写遍历数组的情况
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (numbers[pivot] < numbers[high]) {
            high = pivot;
        } else if (numbers[pivot] > numbers[high]) {
            low = pivot + 1;
        } else {
            high -= 1;
        }
    }
    return numbers[low];
*/
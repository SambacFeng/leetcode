/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let currSum = 0, totalSum = 0
    let start = 0
    for (let i = 0; i < gas.length; i++) {
        currSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        if (currSum < 0) {
            start = i + 1
            currSum = 0
        }
    }
    if (totalSum < 0) return -1
    return start
}

/* 
    2021/11/4
    42 20
    模拟，使用了类似倍长数组的思路，两遍遍历来使用数组模拟环形路线
    let count = gas.length * 2
    let curr = 0, start = 0
    let total = 0
    while (count--) {
        if ((curr + 1) % gas.length === start && total + gas[curr] >= cost[curr]) return start
        total += gas[curr]
        if (total >= cost[curr]) {
            total -= cost[curr]
            curr++
            curr %= gas.length
        } else {
            curr++
            start = curr
            total = 0
        }
    }
    return -1

    换用贪心，一次遍历
    57 22
    使用totalSum判断是否有解
    使用currSum判断起点在哪(起点唯一才能这么搞)
*/

let gas = [2,2,2,2], cost = [1,2,2,3]
canCompleteCircuit(gas, cost)
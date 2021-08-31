/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0, currMin = prices[0]

    for (let sell = 1; sell < prices.length; sell++) {
        currMin = Math.min(currMin, prices[sell])
        res = Math.max(res, prices[sell] - currMin)
    }

    return res
};

/* 
    2021/8/31
    73 56
    从前向后遍历可能的卖出时间，并记录在卖出时间前可用的最小买入价格，计算最大利润
    相比遍历买入时间并在循环内向后遍历，省一遍遍历，N^2 ==> N
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        let str = ""
        if (!(i % 3 || i % 5)) {
            str += "FizzBuzz"
        } else if (!(i % 3)) {
            str += "Fizz"
        } else if (!(i % 5)) {
            str += "Buzz"
        } else {
            str += i.toString()
        }
        res.push(str)
    }
    return res
}

/* 
    2021/10/13
    69 43
    逢7过是吧。。治愈系题目。。让我从没做出昨天的中等题的痛苦中走了出来。。
*/
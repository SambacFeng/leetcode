/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let arr = ["1"]
    const count = num => {
        let a = []
        a.push([arr[num - 1][0], 1])
        for (let i = 1; i < arr[num - 1].length; i++) {
            if (arr[num - 1][i - 1] === arr[num - 1][i]) {
                a[a.length - 1][1]++
            } else {
                a.push([arr[num - 1][i], 1])
            }
        }
        return a
    }
    const say = a => {
        let res = ""
        a.forEach(e => {
            res += `${e[1]}${e[0]}`
        })
        return res
    }
    for (let i = 1; i <= 30; i++) {
        arr[i] = say(count(i))
    }
    console.log(arr);
    return arr[n - 1]
}

/* 
    2021/10/15
    5 5
    含变量的字符串可以使用模板字符串进行拼接
    可以打表，97 98...
*/

countAndSay(30)
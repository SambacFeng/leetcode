/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let len1 = version1.length
    let len2 = version2.length
    let i = 0, j = 0
    while (i < len1 || j < len2) {
        let num1 = 0, num2 = 0
        while (i < len1 && version1[i] !== '.') {
            num1 = num1 * 10 + version1[i] * 1
            i++
        }
        while (j < len2 && version2[j] !== '.') {
            num2 = num2 * 10 + version2[j] * 1
            j++
        }
        if (num1 !== num2) {
            return num1 > num2 ? 1 : -1
        }
        i++
        j++
    }
    return 0
}

let res = compareVersion('7.5.2.4', '7.5.3')
console.log(res)

/* 
    2021/7/22
    双指针
    可直接split，不让用split可实现简单的split

    2021/9/1 追加
    会用map了，写了个简单点好理解的版本
    let v1 = version1.split('.').map(x => Number(x))
    let v2 = version2.split('.').map(x => Number(x))
    let len = Math.max(v1.length, v2.length)
    while (v1.length < len) {
        v1.push(0)
    }
    while (v2.length < len) {
        v2.push(0)
    }
    for (let i = 0; i < len; i++) {
        if (v1[i] > v2[i]) {
            return 1
        } else if (v1[i] < v2[i]) {
            return -1
        }
    }
    return 0
*/


let mySplit = (str, ch) => {
    let index = 0
    let res = []
    while (index < str.length) {
        let subString = ''
        while (str[index] !== ch && index < str.length) {
            subString += str[index]
            index++
        }
        index++
        res.push(subString)
    }
    return res
}
/* 

let pv1 = 0, pv2 = 0
while (pv1 < version1.length && pv2 < version2.length) {
    let l1 = getLen(version1, pv1)
    let l2 = getLen(version2, pv2)
    num1 = +version1.substr(pv1, l1)
    num2 = +version2.substr(pv2, l2)
    if (num1 !== num2) {
        return num1 > num2 ? 1 : -1
    }
    pv1 += (++l1)
    pv2 += (++l2)
}
if (pv1 < version1.length) {
    l1 = 
}
if (pv2)
let getLen = (str, index) => {
    let count = 0
    while (str[index] !== '.' && index++ < str.length) {
        count++
    }
    return count
} */



/* v1 = version1.split('.').map(Number)
v2 = version2.split('.').map(Number)
len = Math.max(v1.length, v2.length)
while (v1.length < len) {
    v1.push(0)
}
while (v2.length < len) {
    v2.push(0)
}
for (let i = 0; i < len; i++) {
    if (v1[i] < v2[i]) {
        return -1
    } else if (v1[i] > v2[i]) {
        return 1
    }
}
return 0 */


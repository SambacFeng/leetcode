/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let array = s.split('')
    let len = array.length - 1
    let count = 0
    for (let e of array) {
        if (e === ' ') {
            count++
        }
    }
    let index = len + count * 2
    while (len !== index) {
        if (array[len] === ' ') {
            array[index--] = '0'
            array[index--] = '2'
            array[index--] = '%'
            len--
        } else {
            array[index--] = array[len--]
        }
    }
    // console.log(len, count, index);
    // console.log(array.join(''))
    return array.join('')
}

let s = "We are happy."
replaceSpace(s)

/* 
    2021/7/21
    字符串+快慢指针
    先使用split('')将字符串转换为字符数组，再进行替换操作，最后用join('')连接成字符串
    但这个算法                       84ms 37.6MB
    相比之下，使用内置方法更快些
    s = s.replace(/ /g, '%20')      52ms 37.7MB
    s = s.split(' ').join('%20')    60ms 37.2MB
    如果不考虑算法题本身属性，业务中应使用内置方法
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse()
    return 
};

/* 
    2021/8/19
    笑死，根本不用写
    其实应该是
    let left = 0, right = s.length - 1
    while(left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    但是61 50还不如reverse的95 79好用
*/
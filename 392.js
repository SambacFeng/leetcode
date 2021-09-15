/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let p1 = p2 = 0, n1 = s.length, n2 = t.length
    while (p1 < n1 && p2 < n2) {
        if (s[p1] === t[p2]) {
            p1++
            p2++
        } else {
            p2++
        }
    }
    return p1 === n1 ? true :false
};

/* 
    2021/9/14
    95 49
    双指针记录位置
*/
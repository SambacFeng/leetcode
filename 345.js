/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const yy = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let head = 0, tail = s.length - 1
    s = s.split('')
    while (!yy.includes(s[head]) && head < s.length) {
        head++
    }
    while (!yy.includes(s[tail]) && tail) {
        tail--
    }
    while (head < tail) {
        [s[head], s[tail]] = [s[tail], s[head]]
        while (!yy.includes(s[++head]) && head < s.length);
        while (!yy.includes(s[--tail]) && tail);
    }
    return s.join('')
};

console.log("#", reverseVowels("hello")); 

/* 
    2021/8/19
    双指针模拟
*/
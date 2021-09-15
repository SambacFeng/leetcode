/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
    //  定义左右指针，起始位置和长度(用于截取并返回字符串)
    let left = right = 0
    let startIndex = 0, len = Number.MAX_SAFE_INTEGER
    // 定义target和curr映射，target储存t中所需字符及数量，curr保存当前窗口中字符与数量，match储存已达到所需要求数量的字符数量
    let target = new Map()
    let curr = new Map()
    let match = 0
    // 将t中字符存入target中
    for (let i = 0; i < t.length; i++) {
        target.has(t[i]) ? target.set(t[i], target.get(t[i]) + 1) : target.set(t[i], 1)
    }
    // 右指针到达末尾时停止循环
    while (right < s.length) {
        // 将最右端字符存入curr中
        let ch = s[right++]
        if (target.has(ch)) {
            curr.has(ch) ? curr.set(ch, curr.get(ch) + 1) : curr.set(ch, 1)
            if (curr.get(ch) === target.get(ch)) match++
        }
        // 判断当前curr中字符数是否满足需求
        while (match === target.size) {
            // 更新最小长度，记录起始位置
            if (right - left < len) {
                startIndex = left
                len = right - left
            }
            // 收缩窗口，右移左指针，更新curr中的值
            let rmCh = s[left++]
            if (target.has(rmCh)) {
                if (curr.get(rmCh) === target.get(rmCh)) match--
                curr.set(rmCh, curr.get(rmCh) - 1)
            }
        }
    }
    // 判断是否有符合条件的字符串，返回
    return len === Number.MAX_SAFE_INTEGER ? "" : s.slice(startIndex, startIndex + len)
};

/* 
    2021/9/15
    73 69
    滑动窗口
*/

s = "a", t = "aa"
minWindow(s, t)
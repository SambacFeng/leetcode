function lengthOfLongestSubstring(s: string): number {
    const w = new Set()
    let res: number = -1
    let left: number = 0, right: number = 0
    while (right < s.length) {
        const ch: string = s[right++]
        while (w.has(ch)) {
            w.delete(s[left++])
        }
        w.add(ch)
        res = Math.max(res, w.size)
    }
    return res === -1 ? 0 : res
}

/* 
    2022/03/08
    73 36
    滑动窗口
    最近常考，练练手
*/
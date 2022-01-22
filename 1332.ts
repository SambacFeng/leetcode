function removePalindromeSub(s: string): number {
    for (let i: number = 0; i < Math.floor(s.length / 2); ++i) {
        if (s[i] !== s[s.length - 1 - i]) {
            return 2
        }
    }
    return 1
}

/* 
    2022/01/22
    13 88
    字符串 双指针
    读题不规范，写码两行泪
    一开始以为是删字串，后来发现是删子序列
    一开始以为是全字符，后来发现就ab俩
    然后题目就被转换为判断s是否是回文串
*/
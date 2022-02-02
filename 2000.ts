function reversePrefix(word: string, ch: string): string {
    if (!word.includes(ch)) return word
    let res: string = ""
    let idx: number = 0
    for (; idx < word.length; idx++) {
        res = word[idx] + res
        if (word[idx] === ch) break
    }
    return res + word.substring(idx + 1)
}

/* 
    2022/02/02
    100 13
    字符串
*/
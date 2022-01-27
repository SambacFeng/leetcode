function countValidWords(sentence: string): number {
    let res: number = 0
    const word: string[] = sentence.split(' ')
    word.forEach(e => /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/.test(e) ? res++ : '')
    return res
}

/* 
    2022/01/27
    100 10
    字符串 正则表达式
*/
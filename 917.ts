function reverseOnlyLetters(s: string): string {
    const arr: string[] = s.split('')
    const letters: string[] = []
    for (let i = 0; i < arr.length; i++) {
        const ascii: number = arr[i].charCodeAt(0)
        if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122) {
            letters.push(s[i])
            arr[i] = null
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            arr[i] = letters.pop()
        }
    }
    return arr.join('')
}

/* 
    2022/02/23
    91 41
    字符串 数组
    把所有字母提取出来然后逆序替换
*/
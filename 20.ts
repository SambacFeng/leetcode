function isValid(s: string): boolean {
    if (s.length % 2) return false
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        const ch: string = s[i]
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch)
        } else if (!stack.length) {
            return false
        } else {
            const ch2: string = stack.pop()
            if (ch === ')' && ch2 !== '(' || ch === ']' && ch2 !== '[' || ch === '}' && ch2 !== '{') return false
        }
    }
    return stack.length ? false : true
}
var rotate = function (matrix) {
    let temp = 0
    let n = matrix.length - 1
    // console.log(n);
    for (let i = 0; i <= n / 2; i++) {
        for (let j = i; j < n - i; j++) {
            // console.log(i + ' ' + j + ' ' + matrix[i][j]);
            temp = matrix[i][j]
            matrix[i][j] = matrix[n - j][i]
            matrix[n - j][i] = matrix[n - i][n - j]
            matrix[n - i][n - j] = matrix[j][n - i]
            matrix[j][n - i] = temp
            // console.log(matrix);
            /* 
            0,1     2,0     3,2     1,3
            i,j     n-j,i   n-i,n-j j,n-i

            */
        }
    }
    return matrix
}

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(3/2);
// console.log(matrix);
console.log(rotate(matrix));

/* 
    2021/7/17
    只需旋转四分之一即可
    关键点在于j的始末值，以及n分别为奇数和偶数时的情况，为奇数时可以不旋转中间点
    此解法旋转的是主次对角线的上部，左闭右开
    也可选择左上部分，此时0 < i < (n + 1) / 2, 0 < j < n / 2

    还可以使用翻转得到结果，先水平翻转，再主对角线翻转
        // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
*/
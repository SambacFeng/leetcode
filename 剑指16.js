/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if (n == 0) {
        return 1
    }
    if (x == 0 || x == 1) {
        return x
    }
    let res = usndPow(Math.abs(x), Math.abs(n))
    if (n < 0) {
        res = 1 / res
    }
    if (x < 0 && n % 2) {
        res = -res
    }
    return res
};

let usndPow = (x, n) => {
    if (n === 1) {
        return x
    }
    if (n === 0) {
        return 1
    }
    if (x == 0) {
        return 1
    }
    if (n % 2) {
        return x * usndPow(x, n - 1)
    } else {
        return usndPow(x * x, n / 2)
    }
}

/* 
    2021/8/14
    78% 20%
    能过就行。。。
    下面有简单写法
*/

console.log(myPow(2.00000, 2));
console.log(myPow(2.00000, -2));
console.log(myPow(2.50000, 2));
console.log(myPow(2.50000, -2));
console.log(myPow(-2.00000, 2));
console.log(myPow(-2.00000, -2));
console.log(myPow(-2.50000, 2));
console.log(myPow(-2.50000, -2));
console.log(myPow(0.00001, 2147483647));

/* 
    // 最后递归结果
    // 递归要有最终条件
   if(n===0)return 1 // n=0直接返回1
   if(n<0){   				//n<0时 x的n次方等于1除以x的-n次方分 -n负负得正
       return 1/myPow(x,-n)
   }
   if(n%2){    // n是奇数时 x的n次方 = x*x的n-1次方 ===>转化为偶数
       return x*myPow(x,n-1)
   }
   return myPow(x*x,n/2) // n是偶数，使用分治，一分为二，等于x*x的n/2次方 （x*x）的n/2次方
*/
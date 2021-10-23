/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let w = Math.floor(Math.sqrt(area))
    while (area % w) {
        --w
    }
    return [Math.floor(area / w), w]
}

/* 
    2021/10/23
    100 83
    小学奥数时间到
*/
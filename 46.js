/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let track = [], res = []

    const bt = track => {
        if (track.length === nums.length) {
            // 这里使用.slice()获得一份track的复制，否则由于res里的track和用于回溯的track指向同一个对象，在回溯pop()时会连带res中的一起改变
            res.push(track.slice())
            return
        }
        for (let num of nums) {
            if (track.indexOf(num) !== -1) {
                continue
            }
            track.push(num)
            bt(track)
            track.pop()
        }
    }

    bt(track)
    return res
};

/* 
    2021/8/28
    85 67
    明确 路径 选择列表 结束条件 这三个要点
    回溯框架：
    if (满需结束条件) {
        将当前track加入结果中
        return
    }
    for (选择 in 选择列表) {
        做选择(可使用continue跳过已做过的选择)
        backtrack(路径，选择列表)
        撤销选择
    }
    路径：已在track中的num
    选择列表：不在track中的num
    结束条件：所有num都在track中
*/

let nums = [1,2,3]

console.log(permute(nums));
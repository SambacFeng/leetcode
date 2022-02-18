function findCenter(edges: number[][]): number {
/*     const nodes = edges.flat(1)
    const s = new Set()
    for (let e of nodes) {
        if (s.has(e)) {
            return e
        } else (s.add(e))        
    } */
    return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1]
}

/* 
    2022/02/18
    17 17
    图
    星形图只有一个节点会多次在边中出现，即为中心节点
    写完之后感觉不对劲，随便找两个边看看哪个节点出现两次不就行了，我干嘛拍平数组用什么Set啊
    看题解还真有这么个思路。。83 33
*/
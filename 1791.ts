function findCenter(edges: number[][]): number {
    const nodes = edges.flat(1)
    const s = new Set()
    for (let e of nodes) {
        if (s.has(e)) {
            return e
        } else (s.add(e))        
    }
}

/* 
    2022/02/18
    17 17
    图
    星形图只有一个节点会多次在边中出现，即为中心节点
*/
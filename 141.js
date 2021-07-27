/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function (head) {
    while (head !== null) {
        if (head.flag) {
            return true
        }
        head.flag = true
        head = head.next
    }
    return false
}

/*
    2021/7/27
    遍历，给遍历过的节点添加一个flag属性，若flag为true则证明有环，时间N，空间N
    这题出的就很有问题，pos干啥用的

    题目让尝试空间1的解法，抄了个双指针的，每次快指针比慢指针多走一步，相遇则证明有环
    if (!head) return false;
    let slowp = head,
    fastp = head;
    while (fastp.next !== null && fastp.next.next !== null) {
        slowp = slowp.next;
        fastp = fastp.next.next;
        if (slowp === fastp) {
        return true;
        }
    }
  return false;

    看到个离谱的解法。。
    try {
        JSON.stringify(head)
    } catch{
        return true
    }
    return false
    至今也搞不明白为什么能这么写，刷个lc连catch都用上了
    看了看评论，stringify在遇到循环引用时会报错。。我是傻逼。。
*/
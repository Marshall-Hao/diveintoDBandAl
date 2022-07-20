/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // * 空链表
  const l3 = new ListNode(0);
  //  * 新建指针指向头部
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while (p1 || p2) {
    // * 有可能l1,l2长度不一样 导致加到undefined 产生NaN
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const val = v1 + v2 + carry;
    // * 拿到10位上的值
    carry = Math.floor(val / 10);
    // * 个位上的余数
    p3.next = new ListNode(val % 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }
  // * 如果最后一次进1了，也要往后加一个
  if (carry) {
    p3.next = new ListNode(carry);
  }
  // * 不包括开头为0的
  return l3.next;
};

// * time O(n) space O(n)

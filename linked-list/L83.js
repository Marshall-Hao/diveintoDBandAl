/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// * time 2O(n) space 2O(n)
var deleteDuplicatesOld = function (head) {
  let p = head;
  const set = new Set();
  while (p) {
    set.add(p.val);
    if (p) p = p.next;
  }
  const inital = new ListNode(0);
  const newList = [...set].reduce((x, y) => {
    x.next = new ListNode(y);
    return x.next;
  }, inital);
  return inital.next;
};

// * time O(n) space O(1)
var deleteDuplicates = function (head) {
  let p = head;
  //    确保下个元素也有值
  while (p && p.next) {
    //  * 因为是有顺序所以相邻才可能相等
    if (p.val === p.next.val) {
      p.next = p.next.next;
      //    * 只有不一样才往下走一个
    } else {
      p = p.next;
    }
  }
  return head;
};

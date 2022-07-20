/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const e = new ListNode(5);
const d = new ListNode(4, e);
const c = new ListNode(3, d);
const b = new ListNode(2, c);
const a = new ListNode(1, b);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // console.log(head.next)
  let p1 = head,
    p2 = null;
  while (p1) {
    // console.log('000000',p1,p2)
    const tmp = p1.next;
    p1.next = p2;
    // console.log('111111',p1,p2)
    p2 = p1;
    p1 = tmp;
    // console.log('222222',p1,p2)
  }
  // console.log(p2.val)
  return p2;
};

const res = reverseList(a);

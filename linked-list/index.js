const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };
a.next = b;
b.next = c;
c.next = d;

// * iterate the linked-list
// * 指向a这个头部的引用
let p = a;
while (p) {
  console.log(p.val);
  p = p.next;
}

// * indsert value in the linked-list
const e = { val: "e" };
c.next = e;
e.next = d;

// * del from list
c.next = d;

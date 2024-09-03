function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let c = head;
  while (c != null && c.next != null) {
    if (c.val == c.next.val) {
      c.next = c.next.next;
    } else {
      c = c.next;
    }
  }
  return head;
};

const deleteDuplicateso = (head) => {
  let d = new ListNode();
  let c = d;

  while (head.next !== null) {
    //head.next !== null && head.val !== head.next.val
    if (head.val !== head.next.val) {
      c.next = head;
      c = c.next;
    }
    head = head.next;
  }

  return d.next;
};

let l = new ListNode(1);
l.next = new ListNode(1);
l.next.next = new ListNode(2);
l.next.next.next = new ListNode(3);
l.next.next.next = new ListNode(3);
l.next.next.next.next = new ListNode(3);

const delDubs = deleteDuplicateso(l);

// Logging the merged linked list
let current = delDubs;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

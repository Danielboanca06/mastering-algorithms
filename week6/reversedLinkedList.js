class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  // 1 => 2 => 3 => 4 => 5 => null
  //

  while (curr !== null) {
    let nextNode = curr.next; // 3
    curr.next = prev; // 1 => null => 3 => 4 => 5 => null

    prev = curr; // 1 => null => 3 => 4 => 5 => null
    curr = nextNode; // 2 =>
  }

  return prev;
};

//
//

///

///

///

//
//

//

//

//

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
mergedList = reverseList(list1);
let current = mergedList;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

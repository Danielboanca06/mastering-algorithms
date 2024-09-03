class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Increment
var mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode();
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
    console.log(list1.val < list2.val, list1.val, list2.val);
    if (list1.val < list2.val) {
      current.next = list1;
      // console.log(current, "from list 1");
      list1 = list1.next;
    } else {
      current.next = list2;
      console.log(current, "from list 2");
      list2 = list2.next;
    }
    current = current.next;
  }

  console.log(list1 !== null, "list1 is not equal to one");
  current.next = list1 !== null ? list1 : list2;

  return dummyHead.next;
};

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// Merging two sorted linked lists
const mergedList = mergeTwoLists(list1, list2);

// Logging the merged linked list
let current = mergedList;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

console.log(4 < null);

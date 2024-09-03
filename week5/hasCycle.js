function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let p1 = head;
  let p2 = head.next;

  while (p1 !== p2) {
    if (!p2 || !p2.next) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return true;
};

//[[3,2,0,-4]

function createLinkedList(values, withCycle = false) {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;
  let cycleNode = null;

  for (let i = 1; i < values.length; i++) {
    const node = new ListNode(values[i]);
    current.next = node;
    if (withCycle && i === values.length - 1) {
      cycleNode = node;
    }
    current = node;
  }

  if (withCycle) {
    current.next = cycleNode;
  }

  return head;
}

function testHasCycle() {
  const testCases = [
    { values: [], expectedResult: false },
    { values: [1, 2, 3, 4, 5], expectedResult: false },
    { values: [3, 2, 0, -4], withCycle: true, expectedResult: true },
    { values: [1], expectedResult: false },
    { values: [1], withCycle: true, expectedResult: true },
    // Add more test cases here
  ];

  for (const testCase of testCases) {
    const { values, withCycle, expectedResult } = testCase;
    const head = createLinkedList(values, withCycle);
    const actualResult = hasCycle(head);
    console.log(
      `Linked List: ${values.join(
        " -> "
      )}, Cycle: ${withCycle}, Expected: ${expectedResult}, Actual: ${actualResult}`
    );
  }
}

testHasCycle();

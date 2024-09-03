let slow = head;
let fast = head;
while (fast && fast.next !== null) {
  slow = slow.next;
  fast = fast.next.next;
}

return slow;

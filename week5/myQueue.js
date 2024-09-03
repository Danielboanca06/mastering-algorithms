class MyQueue {
  constructor() {
    this.stack = [];
  }

  push(x) {
    //push x to back of queue
    this.stack.push(x);
  }

  pop() {
    // remove element from front return it
    return this.stack.shift();
  }

  peek() {
    // return element from the front
    return this.stack[0];
  }

  empty() {
    // return boolean if empty
    return this.stack.length === 0;
  }
}

var obj = new MyQueue();
obj.push(1);
obj.push(2);
var param_3 = obj.peek();
var param_2 = obj.pop();
var param_4 = obj.empty();

console.log({ param_2, param_3, param_4 });

console.log(0 < 0);

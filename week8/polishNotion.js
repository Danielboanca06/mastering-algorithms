5;
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (const val of tokens) {
    if (!isNaN(val)) {
      stack.push(val);
    } else {
      let last = parseInt(stack.pop());
      let first = parseInt(stack.pop());
      switch (val) {
        case "+":
          stack.push(first + last);
          break;
        case "-":
          stack.push(first - last);
          break;
        case "*":
          stack.push(first * last);
          break;
        case "/":
          stack.push(Math.trunc(first / last));
          break;
      }
    }
  }
  return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
const n = -123;
const k = 123;
console.log(-n, -k);

// () {} []

// my solution works for basic testing but is not correct as it does not detect properly
// time complexity O(n)
const isValid = (s) => {
  const map = new Map();
  s.split("").forEach((paren) => {
    if (map.has(paren)) {
      let currentValue = map.get(paren);
      map.set(paren, currentValue + 1);
    } else {
      map.set(paren, 1);
    }
  });

  if (map.get("(") === map.get(")")) {
    if (map.get("[") === map.get("]")) {
      if (map.get("{") === map.get("}")) {
        return true;
      }
    }
  }
  return false;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); // false
console.log(isValid("((({)))}"), "should return false"); // false

//second solution valid answer uses a stack data structure
// time complexity O(n)

const isValidParams = (s) => {
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const temp = [];

  for (const char of s.split("")) {
    if (char in brackets) {
      temp.push(char);
    } else {
      const val = temp.pop();
      if (brackets[val] !== char) {
        return false;
      }
    }
  }
  return temp.length === 0;
};
console.log(isValidParams("()[]{}")); // true
console.log(isValidParams("()[]{}")); //true
console.log(isValidParams("(]")); // false
console.log(isValidParams("((({)))}")); // false

const isValidParamsHash = (s) => {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const stack = [];

  for (const char of s.split("")) {
    if (map.has(char)) {
      stack.push(char);
      continue;
    }

    const last = stack.pop();
    if (map.get(last) !== char) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValidParamsHash("()[]{}")); // true
console.log(isValidParamsHash("()[]{}")); //true
console.log(isValidParamsHash("(]")); // false
console.log(isValidParamsHash("((({)))}")); // false

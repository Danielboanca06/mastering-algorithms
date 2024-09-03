var addBinary = function (a, b) {
  let num1Arr = a.split("");
  let num2Arr = b.split("");
  let result = [];

  let temp = 0;

  let j = num2Arr.length - 1;
  let i = num1Arr.length - 1;
  while (i >= 0 || j >= 0 || temp > 0) {
    let value =
      (i >= 0 ? Number(num1Arr[i]) : 0) +
      (j >= 0 ? Number(num2Arr[j]) : 0) +
      temp;

    if (value === 2) {
      result.push(0);
      temp = 1;
    } else if (value === 1) {
      result.push(1);
      temp = 0;
    } else if (value === 0) {
      result.push(0);
      temp = 0;
    } else if (value === 3) {
      result.push(1);
      temp = 1;
    }
    i--;
    j--;
  }

  if (temp > 0) {
    result.push(temp);
  }

  return result.reverse().join("");
};

console.log(addBinary("11", "1")); // ouptut 100
console.log(addBinary("1010", "1011")); // ouptut 10101
